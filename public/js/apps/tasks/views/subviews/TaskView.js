define(function (require) {
	var Backbone = require('Backbone');

	var EmailView = Backbone.View.extend({
		tagName: 'tr',

		template: require('hbs!./../../templates/TaskView'),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return EmailView;
});