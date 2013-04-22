define(function (require) {
	var $ = require('jQuery');
	var Backbone = require('Backbone');

	return {
		setup: function (win, app) {
			$(win.document).on("click", "a[href]:not([data-bypass])", function(evt) {
				var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
				var root = win.location.protocol + "//" + win.location.host + app.root;

				if (href.prop.slice(0, root.length) === root) {
					evt.preventDefault();
					Backbone.history.navigate(href.attr, true);
				}
			});
		}
	};
});