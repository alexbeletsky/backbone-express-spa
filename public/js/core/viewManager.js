define(function (require) {
	var $ = require('jQuery');

	var ViewManager = function () {
		return {
			show: showView
		};
	};

	function showView(view) {
		if (this.currentView) {
			this.currentView.remove();
		}

		this.currentView = view;

		$("#app").html(this.currentView.el);
		this.currentView.render();
	}

	return ViewManager;

});