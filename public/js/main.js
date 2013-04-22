require.config({
	shim: {
		'jQuery': {
			exports: '$'
		},

		'Underscore': {
			exports: '_'
		},

		'Backbone': {
			deps: ['Underscore', 'jQuery'],
			exports: 'Backbone'
		},

		'ApplicationRouter': {
			deps: ['jQuery', 'Underscore', 'Backbone']
		}
	},

	paths: {
		Backbone: './../components/backbone/backbone',
		jQuery: './../components/jquery/jquery',
		Underscore: './../components/underscore/underscore'
	}
});

require(['core/router', 'core/client', 'Backbone'], function (Router, client, Backbone) {
	var app = {
		root: '/'
	};

	window.Router = new Router();
	client.setup(window, app);

	Backbone.history.start({ pushState: true });
});