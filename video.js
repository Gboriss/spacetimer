let video = document.getElementById('video')
let viewport = document.getElementById('viewport')

video.play()

document.addEventListener('click', () => {
	video.play()
})

let aspect = 16 / 9

function setSize(W, H) {
	if (!video) return

	// console.log(W, H, condition, window.orientation)

	document.body.style.width = W + 'px'
	document.body.style.height = H + 'px'

	if (W / H < aspect) {
		video.height = H
		video.width = H * aspect
	
		video.style.top = 0
		video.style.left = (W - video.width) / 2 + 'px'
	} else {
		video.width = W
		video.height = W * aspect
	
		video.style.left = 0
		video.style.top = (H - video.height) / 2 + 'px'
	}

}


setSize(window.innerWidth, window.innerHeight)

window.addEventListener('resize', () => setSize(window.innerWidth, window.innerHeight))



// window.addEventListener('orientationchange', () => {

// 	setTimeout(() => {
// 		if (window.orientation !== 0) setSize(window.innerHeight, window.innerWidth)
// 		else setSize(window.innerWidth, window.innerHeight)
// 	}, 1000)
// })
