// script.js
function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
      height: '800',
      width: '600',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  
  function stopVideo() {
    player.stopVideo();
  }