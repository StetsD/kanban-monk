let EE = require('events').EventEmitter;

let _TIMER = null;

export default class Timer extends EE {
	constructor(){
		super();

		this.time = 0;
	}

	start(){
		let that = this;
		setTimeout(function run(){
			that.time++;
			setTimeout(run, 1000);
		}, 1000);
	}

	stop(){

	}

	pause(){

	}
}
