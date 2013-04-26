define(function (require) {
	var InboxCollection = require('./collections/InboxCollection');
	var MainView = require('./views/MainView');

	return {
		run: function(viewManager) {
			var inboxCollection = new InboxCollection();
			inboxCollection.fetch({
				success: function (inboxCollection) {
					var view = new MainView({collection: inboxCollection});
					viewManager.show(view);
				}
			});
		}
	};
});