module.exports = function (app) {
	app.get('/api/users', function (req, res) {
		res.json({status: 'GET /api/users'});
	});

	app.post('/api/users', function (req, res) {
		res.json({status: 'POST /api/users'});
	});

	app.put('/api/users/:id', function (req, res) {
		res.json({status: 'PUT /api/users/' + req.params.id});
	});

	app.delete('/api/users/:id', function (req, res) {
		res.json({status: 'DELETE /api/users/' + req.params.id});
	});
};