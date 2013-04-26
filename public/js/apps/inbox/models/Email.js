define(function(require) {
	var Backbone = require('Backbone');

	var Email = Backbone.Model.extend({
		urlRoot: '/api/emails'
	});

	return Email;
});