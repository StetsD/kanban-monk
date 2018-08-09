export default function (ctx) {
	if(ctx.route.fullPath.match(/done/gi)){
		if(!ctx.store.getters['tasks/getTasksDone'].length){
			ctx.redirect(301, '/task');
		}
	}
}
