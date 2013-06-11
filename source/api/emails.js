var emails = function (app) {
	var container = [{
			subject: 'Hello, I\'m first message',
			message: 'Message body',
			sentDate: '04/25/2013'
		},{
			subject: 'Kitties!!!',
			message: 'Links for pretty Kitties',
			priority: 'Yes',
			sentDate: '04/25/2013'
		},{
			subject: '[Disquss] New comment in your blog',
			message: 'Some nice and interesting comment',
			sentDate: '04/25/2013'
		},{
			subject: '[Github] backbone-express-spa is awesone',
			message: 'New issue in backbone-express-spa repository',
			priority: 'Yes',
			sentDate: '04/25/2013'
		},{
			subject: 'Twitter: New followers in twitter',
			message: '@coolguy started to follow you!',
			sentDate: '04/25/2013'
		},{
			subject: 'O\'Reilly Media',
			message: 'Message body',
			sentDate: '04/25/2013'
		}
	];

	app.get('/api/emails', function (req, res) {
		res.json(container);
	});

	app.post('/api/emails', function (req, res) {
		var email = req.body;
		container.push(email);

		res.send(201);
	});
};

module.exports = emails;