let EE = require('events').EventEmitter;

let _TIMER = null;
const TIME_LIMIT_MIN = 25 * 60;

export default class Timer extends EE {
	constructor(){
		super();

		this.time = 0;
	}

	start(cb, type){
		let that = this;
		setTimeout(function run(){
			that.time++;
			cb(type, that.time);
			setTimeout(run, 1000);
		}, 1000);
	}

	stop(){

	}

	pause(){

	}

	static parseTime(t){
		let min = Math.floor(t / 60),
			sec;

		if(!min){
			sec = t;
			min = '00';
		}else{
			sec = t - (min * 60);
			min = min.toString().length <= 1 ? `0${min}` : min;
		}

		sec = sec.toString().length <= 1 ? `0${sec}` : sec;
		return `${min}:${sec}`;
	}
}
