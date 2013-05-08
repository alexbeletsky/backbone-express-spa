define(function (require) {
	var $ = require('jQuery');
	var transition = require('./transition');

	var viewManager = (function () {
		var currentView;
		var transitionType = $('#app').data('transition');

		function showView(view) {
			disposeView(currentView, function () {
				render(view);
			});
		}

		function disposeView(view, callback) {
			if (!view) {
				return callback();
			}

			return applyTransition(view.$el, transitionType, function () {
				_disposeView(view);
				return callback();
			});

			function applyTransition(el, name, callback) {
				if (!name) {
					return callback();
				}

				return transition.apply(el, name, callback);
			}

			function _disposeView(view) {
				view.subviews && view.subviews.forEach(function (subview) {
					_disposeView(subview);
				});

				view.remove();
			}
		}

		function render(view) {
			currentView = view;

			$("#app").html(currentView.el);
			currentView.render();
		}

		return {
			show: showView
		};
	})();

	return viewManager;
});