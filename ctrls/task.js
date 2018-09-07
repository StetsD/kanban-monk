let {Router} = require('express'),
	router = Router(),
	model = require('../mdls/task');

router.route('/')
	.get(async (req, res) => {
		res.json(await model.get());
	})
	.post();

router.route('/:id')
	.get()
	.patch()
	.delete();

module.exports = router;
