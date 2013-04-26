define(function (require) {
	var Backbone = require('Backbone');
	var Contact = require('./../models/Contact');

	var ContactsCollection = Backbone.Collection.extend({
		model: Contact,

		url: '/api/contacts'
	});

	return ContactsCollection;
});