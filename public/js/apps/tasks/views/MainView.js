define(function(require) {
	var Backbone = require('Backbone');

	var TasksView = require('./subviews/TasksView');

	var MainView = Backbone.View.extend({
		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			var contactsView = new TasksView({collection: this.collection});
			this.$el.append(contactsView.render().el);
			this.subviews.push(contactsView);

			return this;
		}
	});

	return MainView;
});