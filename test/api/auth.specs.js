var request = require('request');
var root = 'http://localhost:3000/api/auth';

describe('/api/auth.js', function () {
	var error, response, body;

	describe('when user signups', function () {
		var url, payload, error, body;

		beforeEach(function () {
			url = root + '/signup';
		});

		describe('with correct credentials', function () {
			describe('empy payload', function () {
				beforeEach(function () {
					payload = {};
				});

				beforeEach(function (done) {
					request.post({url: url, body: payload, json: true}, function (err, resp) {
						error = error;
						response = resp;
						body = resp.body;
						done();
					});
				});

				it('should return 412 (bad request)', function () {
					expect(response.statusCode).to.equal(412);
				});
			});

			describe('and username is missing', function () {
				beforeEach(function () {
					payload = {password: 'secret'};
				});

				beforeEach(function (done) {
					request.post({url: url, body: payload, json: true}, function (err, resp) {
						error = error;
						response = resp;
						body = resp.body;
						done();
					});
				});

				it('should return 412 (bad request)', function () {
					expect(response.statusCode).to.equal(412);
				});
			});

			describe('and password is missing', function () {
				beforeEach(function () {
					payload = {username: 'a@a.com'};
				});

				beforeEach(function (done) {
					request.post({url: url, body: payload, json: true}, function (err, resp) {
						error = error;
						response = resp;
						body = resp.body;
						done();
					});
				});

				it('should return 412 (bad request)', function () {
					expect(response.statusCode).to.equal(412);
				});
			});
		});

		describe('with right credentials', function () {
			beforeEach(function () {
				payload = {username: 'a@a.com', password: 'secret'};
			});

			beforeEach(function (done) {
				request.post({url: url, body: payload, json: true}, function (err, resp) {
					error = error;
					response = resp;
					body = resp.body;
					done();
				});
			});

			it('should return 201 (user created)', function () {
				expect(response.statusCode).to.equal(201);
			});

			it('should immediatelly authenticate user and return token', function () {
				expect(body.token).to.be.ok;
			});
		});
	});

	describe('when user logins', function () {
		var url, payload, error, body;

		beforeEach(function () {
			url = root + '/login';
		});

		describe('with wrong credentials', function () {
			describe('empy payload', function () {
				beforeEach(function () {
					payload = {};
				});

				beforeEach(function (done) {
					request.post({url: url, body: payload, json: true}, function (err, resp) {
						error = error;
						response = resp;
						body = resp.body;
						done();
					});
				});

				it('should return 412 (bad request)', function () {
					expect(response.statusCode).to.equal(412);
				});
			});

			describe('and username is missing', function () {
				beforeEach(function () {
					payload = {password: 'secret'};
				});

				beforeEach(function (done) {
					request.post({url: url, body: payload, json: true}, function (err, resp) {
						error = error;
						response = resp;
						body = resp.body;
						done();
					});
				});

				it('should return 412 (bad request)', function () {
					expect(response.statusCode).to.equal(412);
				});
			});

			describe('and password is missing', function () {
				beforeEach(function () {
					payload = {username: 'a@a.com'};
				});

				beforeEach(function (done) {
					request.post({url: url, body: payload, json: true}, function (err, resp) {
						error = error;
						response = resp;
						body = resp.body;
						done();
					});
				});

				it('should return 412 (bad request)', function () {
					expect(response.statusCode).to.equal(412);
				});
			});
		});

		describe('with right credentials', function () {
			var signup;

			beforeEach(function () {
				signup = root + '/signup';
			});

			beforeEach(function () {
				payload = {username: 'a@a.com', password: 'secret'};
			});

			// signup
			beforeEach(function (done) {
				request.post({url: signup, body: payload, json: true}, function (err, resp) {
					error = error;
					response = resp;
					body = resp.body;
					done();
				});
			});

			// login
			beforeEach(function (done) {
				request.post({url: url, body: payload, json: true}, function (err, resp) {
					error = error;
					response = resp;
					body = resp.body;
					done();
				});
			});

			it ('should return 200 (token created status)', function () {
				expect(response.statusCode).to.equal(201);
			});

			it ('should return token', function () {
				expect(body.token).to.be.ok;
			});

		});

	});
});