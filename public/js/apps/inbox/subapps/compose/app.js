define(function(require) {
	var MainView = require('./views/MainView');
	var Email = require('./../../models/Email');

	return {
		run: function(viewManager) {
			var email = new Email();
			var mainView = new MainView({model: email});
			viewManager.show(mainView);
		}
	};
});