let days = document.getElementById('days');
let dynamic = document.getElementById('dynamic');
let day;
let hours;
let minutes;
let seconds;

let nextyear = new Date(
	(new Date (Date.now()) ).getFullYear() + 1,
	0, //month
	1 // day
);

// let lastone = nextyear.toString().split('').pop();

setInterval(function () {getDays()}, 1000);

function getDays() {

	let today = new Date(); 
	let leftTime = nextyear.getTime() - today.getTime();
	
	day = Math.floor( leftTime / (1000 * 60 * 60 * 24) ), // milliseconds per day 86400000
	hours = pad(Math.floor( (leftTime / (1000 * 60 * 60)) % 24)),
	minutes = pad(Math.floor( (leftTime / 1000 / 60) % 60 )),
	seconds = pad(Math.floor( (leftTime / 1000) % 60 )),	
	
	days.innerHTML = day + " " + pluralize()
	dynamic.innerHTML = hours + ":" + minutes + ":" + seconds; 
}

function pad(n) {
    return (n < 10 ? '0' : '') + n; //01,02
}


function pluralize (number, one, two, five) {
	
	number = day;
	one = 'день';
	two = 'дня';
	five = 'дней';

    if (number >= 5 && number <= 20) {
        return five;
	}

    number %= 10; // no 21, 31
    if (number == 1) {
        return one;
	}
	
    if (number >= 2 && number <= 4) {
        return two;
    }
	return five;
} 

