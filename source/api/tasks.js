var tasks = function (app) {
	var container = [{
			description: 'backbone-express-spa skeleton',
			dueDate: '04/25/2013',
			done: 'Yes'
		},{
			description: 'Create good readme for backbone-express-spa',
			dueDate: '04/25/2013',
			done: ''
		},{
			description: 'Prepearing code for production (r.js + readme)',
			dueDate: '04/25/2013',
			done: ''
		}
	];

	app.get('/api/tasks', function (req, res) {
		res.json(container);
	});
};

module.exports = tasks;