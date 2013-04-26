define(function(require) {
	var Backbone = require('Backbone');
	var EmailView = require('./EmailView');

	var InboxView = Backbone.View.extend({
		template: require('hbs!./../../templates/InboxView'),

		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			this.$el.html(this.template());

			var mails = this.$('.mails');
			this.collection.forEach(function (mail) {
				var view = new EmailView({model: mail});
				mails.append(view.render().el);
				this.subviews.push(view);
			}, this);

			return this;
		}
	});

	return InboxView;
});