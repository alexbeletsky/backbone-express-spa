define(function (require) {
	var transition = {
		duration: 700,

		apply: function (el, type, callback) {
			var transitionClass = 'animated ' + type;
			el.addClass(transitionClass);
			setTimeout(callback, this.duration);
		}
	};

	return transition;
});