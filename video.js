var players = [];
var currentVideo = null;

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // Load YouTube players for each video
  loadYouTubePlayer("YFlx1C8XwR0", "player1");
  loadYouTubePlayer("JIKfUdu_nIY", "player2");
  loadYouTubePlayer("HcOc7P5BMi4", "player3");
  loadYouTubePlayer("glgmavKWg3Y", "player4");
  loadYouTubePlayer("S2GfjaTbJa4", "player5");
  loadYouTubePlayer("HcOc7P5BMi4", "player6");
  //We can Add more videos as needed
}

// Initialize the slider
var slider = $(".slick-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
});

// Load YouTube videos using the Player API
function loadYouTubePlayer(videoId, playerDivId) {
  players[videoId] = new YT.Player(playerDivId, {
    height: "360",
    width: "640",
    videoId: videoId,
    playerVars: {
      controls: 0,
      showinfo: 0,
    },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

// Handle YouTube player state changes
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    var videoId = event.target.getVideoData().video_id;
    if (videoId !== currentVideo) {
      if (currentVideo) {
        players[currentVideo].pauseVideo();
      }
      currentVideo = videoId;
    }
  }
}

// Play the selected video
function playVideo(videoId) {
  if (currentVideo !== videoId) {
    players[videoId].playVideo();
  }
}
// Pause all videos when "Next" is clicked
$(".slick-next").click(function () {
  if (currentVideo) {
    players[currentVideo].pauseVideo();
    currentVideo = null;
  }
});

$(".slick-prev").click(function () {
  if (currentVideo) {
    players[currentVideo].pauseVideo();
    currentVideo = null;
  }
});
