define(function (require) {
	var Backbone = require('Backbone');

	var HeaderView = Backbone.View.extend({
		template: require('hbs!./../templates/HeaderView'),

		render: function () {
			this.$el.html(this.template({title: 'TheMailer'}));
			return this;
		}
	});

	return HeaderView;
});