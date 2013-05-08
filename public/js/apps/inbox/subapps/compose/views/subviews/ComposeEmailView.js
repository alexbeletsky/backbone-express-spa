define(function (require) {
	var Backbone = require('Backbone');

	var ComposeEmailView = Backbone.View.extend({
		template: require('hbs!./../../templates/ComposeEmailView'),

		events: {
			'click #send': 'sendEmail'
		},

		render: function () {
			this.$el.html(this.template());
			return this;
		},

		sendEmail: function (e) {
			e.preventDefault();

			var attributes = {
				to: this.$('#to').val(),
				cc: this.$('#cc').val(),
				subject: this.$('#subject').val(),
				message: this.$('#message').val(),
				sentDate: '04/25/2013'
			};

			var alerts = this.$('.alerts');
			this.model.save(attributes, {
				success: function () {
					alerts.append('<div class="alert alert-success"><b>Success!</b> Message sent. You will be redirected to inbox now...</div>');
					setTimeout(function () {
						window.Router.navigate('/inbox', {trigger: true});
					}, 1500);
				}
			});
		}
	});

	return ComposeEmailView;
});