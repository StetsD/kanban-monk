let {Router} = require('express'),
	router = Router(),
	model = require('../mdls/task'),
	{rCli: client} = require('../lib/redis');

router.route('/')
	.get(async (req, res) => {
		let user = await rCli.hget('', '', (err, data) => {
			if(err) throw new Error(err);
			return data;
		});
		console.log(user);
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
