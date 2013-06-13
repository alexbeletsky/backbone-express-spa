var request = require('request');
var root = 'http://localhost:3000/api/auth';

describe('/api/auth.js', function () {
	var error, response, body;

	describe('when user signups', function () {
		var url, payload, error, body;

		beforeEach(function () {
			url = root + '/signup';
		});

		describe('empy payload', function () {
			beforeEach(function () {
				payload = {};
			});

			beforeEach(function (done) {
				request.post({url: url, json: true}, function (err, resp) {
					error = error;
					response = resp;
					body = resp.body;
					done();
				});
			});

			it('should return 412', function () {
				expect(response.statusCode).to.equal(412);
			});
		});

		describe('and username is missing', function () {
			it ('should return 412', function () {

			});
		});

		describe('and password is missing', function () {
			it ('should return 412', function () {

			});

		});

		describe('with username and password', function () {
			it ('should return 200', function () {

			});
		});
	});
});