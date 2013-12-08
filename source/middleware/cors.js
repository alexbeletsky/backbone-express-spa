function cors() {
	return function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-Access-Token, X-Revision, Content-Type');

		next();
	};
}

module.exports = cors;