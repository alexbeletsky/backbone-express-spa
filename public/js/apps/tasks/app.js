define(function (require) {
	var TasksCollection = require('./collections/TasksCollection');
	var MainView = require('./views/MainView');

	return {
		run: function(viewManager) {
			var tasksCollection = new TasksCollection();
			tasksCollection.fetch({
				success: function (tasksCollection) {
					var view = new MainView({collection: tasksCollection});
					viewManager.show(view);
				}
			});
		}
	};
});