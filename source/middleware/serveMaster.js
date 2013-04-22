module.exports = function () {
	return function (req, res, next) {
		if(req.url.substr(0, '/api'.length) === '/api'){
			return next();
		}

		res.render('master', { title: 'Backbone.js SPA'});
	};
};