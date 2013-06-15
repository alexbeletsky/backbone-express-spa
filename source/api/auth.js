var bcrypt = require('bcrypt-nodejs');
var _ = require('underscore');
var middleware = require('./../middleware');

var auth = function (app) {
	// fake user storage.. some DB use in real app
	var users = [];

	app.post('/api/auth/signup',
		validateSignup,
		storeUser,
		middleware.auth.createToken,
		returnToken
	);

	app.post('/api/auth/login',
		validateSignup,
		checkUser,
		middleware.auth.createToken,
		returnToken
	);

	app.get('/api/auth/validate',
		middleware.auth.validateToken,
		returnOk
	);

	function storeUser(req, res, next) {
		var signup = _.extend(req.body, { id: users.length });

		bcrypt.genSalt(10, function (err, salt) {
			if (err) {
				return next(err);
			}

			bcrypt.hash(signup.password, salt, null, function (err, hash) {
				if (err) {
					return next(err);
				}

				signup.password = hash;
				req.user = signup;
				users.push(signup);

				return next (null, signup);
			});
		});
	}

	function checkUser(req, res, next) {
		var signup = req.body;
		findUser(signup.username, function (err, user) {
			if (err) {
				return next({message: 'user not found', status: 404});
			}

			bcrypt.compare(signup.password, user.password, function (err, matched) {
				if (!matched) {
					return next({message: 'password is wrong', status: 401});
				}

				req.user = user;
				next();
			});
		});
	}

	function findUser(username, callback) {
		var user = _.find(users, function (u) {
			return u.username === username;
		});

		if (!user) {
			return callback('not found');
		}

		return callback (null, user);
	}

	function validateSignup(req, res, next) {
		var signup = req.body;

		if (!signup.username) {
			return next({message: 'username is missing', body: signup, status: 412});
		}

		if (!signup.password) {
			return next({message: 'password is missing', body: signup, status: 412});
		}

		next();
	}

	function returnToken(req, res, next) {
		res.json(201, {token: req.token});
	}

	function returnOk(req, res, next) {
		res.send(200);
	}
};

module.exports = auth;