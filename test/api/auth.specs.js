var request = require('request');
var url = 'http://localhost:3000/api/auth';

describe('/api/auth.js', function () {
	var error, response, body;
	describe('get', function () {
		beforeEach(function (done) {
			request(url, function (err, resp) {
				error = err;
				response = resp;
				body = resp.body;

				done();
			});
		});

		it('should give no error', function () {
			console.log(error);
		});

		it('it should exist', function () {
			expect(response.statusCode).to.equal(200);
		});
	});

});