define(function (require) {
	var Backbone = require('Backbone');

	var EmailView = Backbone.View.extend({
		tagName: 'tr',

		template: require('hbs!./../../templates/ContactView'),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return EmailView;
});