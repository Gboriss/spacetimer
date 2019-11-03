let video = document.getElementById('video')

window.addEventListener('load', () => {
	if (!video) return

	video.width = window.innerWidth
	video.height = window.innerHeight
})




// function onYouTubeIframeAPIReady() {
//   let player;
//   player = new YT.Player('player', {
//     videoId: 'Xjs6fnpPWy4',
//     playerVars: { 'autoplay': 1, 'controls': 0 },
//     events: {
//       'onReady': onPlayerReady,
//       'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
//       'onStateChange': onPlayerStateChange,
//       'onError': onPlayerError
//     }
//   });
// }
