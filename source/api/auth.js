var express = require('express');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var _ = require('underscore');
var moment = require('moment');

var TOKEN_TTL_MINUTES = 30;
var AUTH_SIGN_KEY = '95810db3f765480999a8d5089b0815bd4b55e831';

var auth = function (app) {

	var users = [];

	app.post('/api/auth/signup',
		validateSignup,
		storeUser,
		createToken,
		returnToken
	);

	app.post('/api/auth/login',
		validateSignup,
		checkUser,
		createToken,
		returnToken
	);

	app.get('/api/auth/validate',
		validateToken,
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
		foundUser(signup.username, function (err, user) {
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

	function foundUser(username, callback) {
		var user = _.find(users, function (u) {
			return u.username === username;
		});

		if (!user) {
			return callback('not found');
		}

		return callback (null, user);
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

	function validateToken (req, res, next) {
		var basic = express.basicAuth(hmacAuthentication);
		return basic(req, res, next);

		function hmacAuthentication(user, password) {
			var token = new Buffer(password, 'base64').toString();
			var parsed = token.split(';');

			if (parsed.length !== 3) {
				return false;
			}

			var username = parsed[0], timespamp = parsed[1], recievedHmac = parsed[2];
			var message = username + ';' + timespamp;
			var computedHmac = crypto.createHmac('sha1', AUTH_SIGN_KEY).update(message).digest('hex');

			if (recievedHmac !== computedHmac) {
				return false;
			}

			return true;
		}
	}

	function returnOk(req, res, next) {
		res.send(200);
	}
};

module.exports = auth;