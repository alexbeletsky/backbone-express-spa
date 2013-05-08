define(function (require) {
	var transition = {
		duration: 1500,

		apply: function (el, type, callback) {
			el.addClass('animated ' + type);
			setTimeout(this.duration, callback);
		}
	};

	return transition;
});