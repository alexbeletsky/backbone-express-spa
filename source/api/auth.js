var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var _ = require('underscore');
var moment = require('moment');

var TOKEN_TTL_MINUTES = 30;
var AUTH_SIGN_KEY = '95810db3f765480999a8d5089b0815bd4b55e831';

var auth = function (app) {
	// user storage
	var users = [];

	app.post('/api/auth/signup',
		validateSignup,
		storeUser,
		createToken,
		returnToken
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

	function createToken(req, res, next) {
		var username = req.user.username;
		var timespamp = moment();
		var message = username + ';' + timespamp.valueOf();
		var hmac = crypto.createHmac('sha1', AUTH_SIGN_KEY).update(message).digest('hex');
		var token = username + ';' + timespamp.valueOf() + ';' + hmac;
		var tokenBase64 = new Buffer(token).toString('base64');

		req.token = tokenBase64;

		next();
	}

	function returnToken(req, res, next) {
		res.json(201, {token: req.token});
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
};

module.exports = auth;