let {Router} = require('express'),
	router = Router(),
	model = require('../mdls/task');

router.route('/')
	.get(async (req, res) => {
		res.json(await model.getAll());
	})
	.post(async (req, res) => {
		try{
			res.json(await model.add(req.body));
		}catch(e){
			res.status(400).send(e);
		}
	});

router.route('/:id')
	.get()
	.patch()
	.delete();

module.exports = router;
