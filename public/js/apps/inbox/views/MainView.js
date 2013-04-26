define(function(require) {
	var Backbone = require('Backbone');

	var ButtonsView = require('./subviews/ButtonsView');
	var InboxView = require('./subviews/InboxView');

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			var buttonsView = new ButtonsView();
			this.$el.append(buttonsView.render().el);
			this.subviews.push(buttonsView);

			var inboxView = new InboxView({collection: this.collection});
			this.$el.append(inboxView.render().el);
			this.subviews.push(inboxView);

			return this;
		}
	});

	return MainView;
});