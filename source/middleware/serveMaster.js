var _ = require('underscore');

module.exports = function () {
	return function (req, res, next) {
		var skipMaster = _.any(['/api', '/components', '/css', '/js'], function (url) {
			return req.url.substr(0, url.length) === url;
		});

		if (skipMaster) {
			return next();
		}

		res.render('master', { title: 'Backbone.js SPA'});
	};
};