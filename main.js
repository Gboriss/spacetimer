let days = document.getElementById('days')
let time = document.getElementById('time')

let nextyear = new Date(
	(new Date (Date.now()) ).getFullYear() + 1,
	0, //month
	1 // day
)

// let lastone = nextyear.toString().split('').pop();

setInterval(getDays, 1000)


function getDays() {

	let today = new Date()

	let leftTime = nextyear.getTime() - today.getTime()
	
	let day = Math.floor( leftTime / (1000 * 60 * 60 * 24) ) // milliseconds per day 86400000
	let hours = pad(Math.floor( (leftTime / (1000 * 60 * 60)) % 24))
	let minutes = pad(Math.floor( (leftTime / 1000 / 60) % 60 ))
	let seconds = pad(Math.floor( (leftTime / 1000) % 60 ))

	if (!days || !time) return
	
	days.innerHTML = day + ' ' + pluralize(day, ['день', 'дня', 'дней'])
	time.innerHTML = hours + ':' + minutes + ':' + seconds
}

function pad(n) {
    return (n < 10 ? '0' : '') + n // 01, 02
}

function pluralize(number, words) {

    if (number >= 5 && number <= 20) {
        return words[2]
	}

	number %= 10 // no 21, 31

    if (number == 1) {
        return words[0]
	}

    if (number >= 2 && number <= 4) {
        return words[1]
	}

	return words[2]
} 
