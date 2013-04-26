define(function(require) {
	var Backbone = require('Backbone');

	var Email = Backbone.Model.extend({
		urlRoot: '/api/inbox'
	});

	return Email;
});