define(function (require) {
	var ContactsCollection = require('./collections/ContactsCollection');
	var MainView = require('./views/MainView');

	return {
		run: function(viewManager) {
			var contactsCollection = new ContactsCollection();
			contactsCollection.fetch({
				success: function (contactsCollection) {
					var view = new MainView({collection: contactsCollection});
					viewManager.show(view);
				}
			});
		}
	};
});