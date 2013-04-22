define(function (require) {
	var Backbone = require('Backbone');

	var MainView = Backbone.View.extend({
		render: function () {
			this.$el.html('<h1>Blog view</h1>');
			return this;
		}
	});

	return MainView;
});