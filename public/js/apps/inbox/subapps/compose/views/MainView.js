define(function (require) {
	var Backbone = require('Backbone');

	var ComposeEmailView = require('./subviews/ComposeEmailView');

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			var composeEmailView = new ComposeEmailView({model: this.model});
			this.$el.append(composeEmailView.render().el);
			this.subviews.push(composeEmailView);

			return this;
		}
	});

	return MainView;
});