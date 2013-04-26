define(function(require) {
	var Backbone = require('Backbone');
	var ContactView = require('./ContactView');

	var InboxView = Backbone.View.extend({
		template: require('hbs!./../../templates/ContactsView'),

		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			this.$el.html(this.template());

			var mails = this.$('.contacts');
			this.collection.forEach(function (mail) {
				var view = new ContactView({model: mail});
				mails.append(view.render().el);
				this.subviews.push(view);
			}, this);

			return this;
		}
	});

	return InboxView;
});