define(function(require) {
	var Backbone = require('Backbone');

	var Contact = Backbone.Model.extend({
		urlRoot: '/api/contacts'
	});

	return Contact;
});