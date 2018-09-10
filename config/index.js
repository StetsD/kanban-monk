let {merge} = require('lodash');

const baseConfig = {
	host: 'localhost',
	protocol: 'http',
	port: 8000,
	keys: ['naprimer', 'fireblaster'],
	api: {
		version: 'v1',
		name: 'api'
	},
	crypto: {
		hash: {
			length: 128,
			iterations: 12000
		},
		algorithm: 'sha256'
	},
	mailer: {
		host: 'smtp.yandex.ru',
		port: 465
	},
	paths: {
		static: '/assets'
	},
	ep: {
		task: '/task'
	}
}

let envConfig = {};

switch(process.env.NODE_ENV){
	case 'development':
	case 'dev':
		envConfig = require('./dev');
		break;
	case 'production':
	case 'prod':
		envConfig = require('./prod');
		break;
	case 'testing':
	case 'test':
		envConfig = require('./test');
		break;
	default:
		envConfig = require('./dev');
		break;
}

module.exports = merge(baseConfig, envConfig);
