define(function(require) {
	var Backbone = require('Backbone');

	var Task = Backbone.Model.extend({
		urlRoot: '/api/tasks'
	});

	return Task;
});