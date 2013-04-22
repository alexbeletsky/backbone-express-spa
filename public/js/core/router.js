define(function(require) {
	var Backbone = require('Backbone');
	var ViewManager = require('./ViewManager');

	var Router = Backbone.Router.extend({
		initialize: function () {
			this.viewManager = new ViewManager();
		},

		routes: {
			'': this.apps.home,
			'home': this.apps.home,
			'dashboard': this.apps.dashboard
		},

		apps: {
			home: function () {
				require('./../pages/main').run(this.viewManager);
			},

			dashboard: function () {
				require('./../pages/dashboard').run(this.viewManager);
			},

			blog: function () {
				require('./../pages/blog').run(this.viewManager);
			},

			account: function () {
				require('./../pages/account').run(this.viewManager);
			},

			about: function () {
				require('./../pages/about').run(this.viewManager);
			}
		}
	});
});