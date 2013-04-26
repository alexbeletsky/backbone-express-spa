define(function(require) {
	var Backbone = require('Backbone');

	var ContactsView = require('./subviews/ContactsView');

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			var contactsView = new ContactsView({collection: this.collection});
			this.$el.append(contactsView.render().el);
			this.subviews.push(contactsView);

			return this;
		}
	});

	return MainView;
});