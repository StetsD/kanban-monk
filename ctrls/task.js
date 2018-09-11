let {Router} = require('express'),
	router = Router(),
	{Model: model} = require('../mdls/user'),
	{checkSession} = require('../lib/checkSession');

router.route('/')
	.get(async (req, res) => {
		let user = await checkSession('sukablyat');
		user ?
			res.json(await model.getTasks(user)) :
			res.status(400).send();
	})
	.post(async (req, res) => {
		let user = await checkSession('sukablyat');
		if(user){
			try{
				res.json(await model.addTask(user, req.body));
			}catch(e){
				res.status(400).send(e);
			}
		}else{
			res.status(400).send();
		}
	});

router.route('/:id')
	.get()
	.patch()
	.delete();

module.exports = router;
