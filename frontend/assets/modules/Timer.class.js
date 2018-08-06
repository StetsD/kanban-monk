let EE = require('events').EventEmitter;

let _TIMER = null;
const TIME_LIMIT_MIN = 25 * 60;

export default class Timer extends EE {
	constructor(){
		super();

		this.time = 0;
		this.isActive = false;
	}

	start(cb, type){
		let that = this;
		this.isActive = true;
		this.ticker = setTimeout(function run(){
			if(!that.isActive){
				return;
			}
			that.time++;
			cb(type, that.time);
			this.ticker = setTimeout(run, 1000);
		}, 1000);
	}

	stop(cb, type){
		this.isActive = false;
		this.time = 0;
		cb(type, this.time);
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
