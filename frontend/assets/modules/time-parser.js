export default {

	parseSeconds(t){
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
