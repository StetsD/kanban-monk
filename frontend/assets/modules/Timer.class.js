let EE = require('events').EventEmitter;

let _TIMER = null;
// const TIME_LIMIT_MIN = 25 * 60;
const TIME_LIMIT_MIN = 10;

export default class Timer extends EE {
	constructor(){
		super();

		this.time = 0;
		this.isActive = false;
	}

	start(cb, type){
		let that = this;
		this.isActive = true;

		that.emit('start');

		that.timer = setTimeout(function run(){
			if(!that.isActive){
				return;
			}

			that.time++;

			if(that.time >= TIME_LIMIT_MIN){
				that.stop();
				that.emit('monk');
				return;
			}

			cb && cb(type, that.time);

			that.emit('tick');

			that.timer = setTimeout(run, 1000);
		}, 1000);

	}

	stop(cb, type){
		clearTimeout(this.timer);
		this.isActive = false;
		this.time = 0;
		cb && cb(type, this.time);
		this.emit('stop');
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
