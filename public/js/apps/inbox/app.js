define(function (require) {
	var EmailsCollection = require('./collections/EmailsCollection');
	var MainView = require('./views/MainView');

	return {
		run: function(viewManager) {
			var emailsCollection = new EmailsCollection();
			emailsCollection.fetch({
				success: function (emailsCollection) {
					var view = new MainView({collection: emailsCollection});
					viewManager.show(view);
				}
			});
		}
	};
});