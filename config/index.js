module.exports = {
	host: 'localhost',
	protocol: 'http',
	port: 8000,
	keys: ['naprimer', 'fireblaster'],
	api: {
		version: 'v1',
		name: 'api'
	},
	database: {
		host: 'localhost',
		port: 27017,
		name: 'kanban-monk'
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
	}
}
