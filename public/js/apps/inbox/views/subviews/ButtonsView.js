define(function(require) {
	var Backbone = require('Backbone');

	var ButtonsView = Backbone.View.extend({
		template: require('hbs!./../../templates/ButtonsView'),

		render: function () {
			this.$el.html(this.template());
			return this;
		}
	});

	return ButtonsView;
});