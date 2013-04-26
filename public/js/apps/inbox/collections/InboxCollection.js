define(function (require) {
	var Backbone = require('Backbone');
	var Email = require('./../models/Email');

	var InboxCollection = Backbone.Collection.extend({
		model: Email,

		url: '/api/inbox'
	});

	return InboxCollection;
});