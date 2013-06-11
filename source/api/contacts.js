var contacts = function (app) {
	var container = [{
			firstName: 'Alexander',
			lastName: 'Beletsky',
			email: 'alexander.beletsky@gmail.com',
			phoneNumber: '055 555-5555'
		},{
			firstName: 'John',
			lastName: 'Smith',
			email: 'jsmith@gmail.com',
			phoneNumber: '055 555-5556'
		},{
			firstName: 'Marry',
			lastName: 'Jane',
			email: 'marry.jane@gmail.com',
			phoneNumber: '055 555-5557'
		}
	];

	app.get('/api/contacts', function (req, res) {
		res.json(container);
	});
};

module.exports = contacts;