define(function(require) {
	var Backbone = require('Backbone');
	var ViewManager = require('./ViewManager');

	var Router = Backbone.Router.extend({
		initialize: function () {
			this.viewManager = new ViewManager();
		},

		routes: {
			'': 'home',
			'inbox': 'inbox',
			'inbox/compose': 'inboxCompose',
			'contacts': 'contacts',
			'tasks': 'tasks'
		},

		home: function () {
			require('./../apps/home/app').run(this.viewManager);
		},

		inbox: function () {
			require('./../apps/inbox/app').run(this.viewManager);
		},

		inboxCompose: function () {
			require('./../apps/inbox/subapps/compose/app').run(this.viewManager);
		},

		contacts: function () {
			require('./../apps/contacts/app').run(this.viewManager);
		},

		tasks: function () {
			require('./../apps/tasks/app').run(this.viewManager);
		}
	});

	return Router;
});