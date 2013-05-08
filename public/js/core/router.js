define(function(require) {
	var Backbone = require('Backbone');
	var viewManager = require('./viewManager');

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'inbox': 'inbox',
			'inbox/compose': 'inboxCompose',
			'contacts': 'contacts',
			'tasks': 'tasks'
		},

		home: function () {
			require('./../apps/home/app').run(viewManager);
		},

		inbox: function () {
			require('./../apps/inbox/app').run(viewManager);
		},

		inboxCompose: function () {
			require('./../apps/inbox/subapps/compose/app').run(viewManager);
		},

		contacts: function () {
			require('./../apps/contacts/app').run(viewManager);
		},

		tasks: function () {
			require('./../apps/tasks/app').run(viewManager);
		}
	});

	return Router;
});