process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';
process.env.TEST_ENV = process.env.TEST_ENV || 'development';
process.env.CLIENTAPP_ENV = process.env.CLIENTAPP_ENV || 'development';

var exit = process.exit;
process.exit = function (code) {
	setTimeout(function () {
		exit();
	}, 200);
};

require('./app');
require('./node_modules/mocha/bin/_mocha');