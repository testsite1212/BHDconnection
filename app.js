var countDownDate = new Date("May 8, 2021 00:00:00").getTime();
var countDownFunction = setInterval(function () {

	var now = new Date().getTime();

	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000  *  60  *  60  *  24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("timer").innerHTML = 
		days + "day⠀"  + hours + "hours⠀" + minutes + "min⠀" + seconds + "sec⠀";

		if (distance < 0) {
			clearInterval(countDownFunction);
			document.querySelector("timer").innerHTML = "WELCOME ALL:)"
		}

})