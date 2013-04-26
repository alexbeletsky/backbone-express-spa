define(function(require) {
	var Backbone = require('Backbone');
	var TaskView = require('./TaskView');

	var InboxView = Backbone.View.extend({
		template: require('hbs!./../../templates/TasksView'),

		initialize: function () {
			this.subviews = [];
		},

		render: function () {
			this.$el.html(this.template());

			var mails = this.$('.tasks');
			this.collection.forEach(function (mail) {
				var view = new TaskView({model: mail});
				mails.append(view.render().el);
				this.subviews.push(view);
			}, this);

			return this;
		}
	});

	return InboxView;
});