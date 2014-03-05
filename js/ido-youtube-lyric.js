// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // height: '390',
    // width: '640',
    // videoId: 'mWRsgZuwf_8',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  setInterval(updatePlayerInfo, 250);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
}

function stopVideo() {
  player.stopVideo();
}








var numDisplayLines = 2; // Number of lines to do the karaoke with

var timings = [
[12,15,[[0,"When the days are cold"]]],
[15,17,[[0,"And the cards all fold"]]],
[17,20,[[0,"And the saints we see"]]],
[20,22,[[0,"Are all made of gold"]]],
[23,25,[[0,"When your dreams all fail"]]],
[25,28,[[0,"And the ones we hail"]]],
[28,30,[[0,"Are the worst of all"]]],
[31,33,[[0,"And the blood’s run stale"]]],
[35,37,[[0,"I wanna hide the truth"]]],
[37,40,[[0,"I wanna shelter you"]]],
[40,42,[[0,"But with the beast inside"]]],
[43,45,[[0,"There’s nowhere we can hide"]]],
[46,48,[[0,"No matter what we breed"]]],
[48,50,[[0,"We still are made of greed"]]],
[51,53,[[0,"This is my kingdom come"]]],
[53,56,[[0,"This is my kingdom come"]]],
[56,58,[[0,"When you feel my heat"]]],
[59,61,[[0,"Look into my eyes"]]],
[61,64,[[0,"It’s where my demons hide"]]],
[64,66,[[0,"It’s where my demons hide"]]],
[67,69,[[0,"Don’t get too close"]]],
[70,71,[[0,"It’s dark inside"]]],
[72,74,[[0,"It’s where my demons hide"]]],
[75,77,[[0,"It’s where my demons hide"]]],
[77,78,[[0,"At the curtain’s call"]]],
[79,81,[[0,"It's the last of all"]]],
[81,84,[[0,"When the lights fade out"]]],
[84,86,[[0,"All the sinners crawl"]]],
[87,89,[[0,"So they dug your grave"]]],
[90,92,[[0,"And the masquerade"]]],
[92,95,[[0,"Will come calling out"]]],
[95,97,[[0,"At the mess you've made"]]],
[98,101,[[0,"Don't wanna let you down"]]],
[101,104,[[0,"But I am hell bound"]]],
[104,106,[[0,"Though this is all for you"]]],
[107,109,[[0,"Don't wanna hide the truth"]]],
[109,112,[[0,"No matter what we breed"]]],
[112,114,[[0,"We still are made of greed"]]],
[115,117,[[0,"This is my kingdom come"]]],
[118,120,[[0,"This is my kingdom come"]]],
[120,122,[[0,"When you feel my heat"]]],
[123,125,[[0,"Look into my eyes"]]],
[125,128,[[0,"It’s where my demons hide"]]],
[128,131,[[0,"It’s where my demons hide"]]],
[131,133,[[0,"Don’t get too close"]]],
[134,135,[[0,"It’s dark inside"]]],
[136,138,[[0,"It’s where my demons hide"]]],
[138,141,[[0,"It’s where my demons hide"]]],
[141,144,[[0,"They say it's what you make"]]],
[144,146,[[0,"I say it's up to fate"]]],
[147,149,[[0,"It's woven in my soul"]]],
[149,152,[[0,"I need to let you go"]]],
[152,154,[[0,"Your eyes, they shine so bright"]]],
[155,157,[[0,"I wanna save that light"]]],
[157,160,[[0,"I can't escape this now"]]],
[160,162,[[0,"Unless you show me how"]]],
[163,165,[[0,"When you feel my heat"]]],
[165,167,[[0,"Look into my eyes"]]],
[168,170,[[0,"It’s where my demons hide"]]],
[171,173,[[0,"It’s where my demons hide"]]],
[174,176,[[0,"Don’t get too close"]]],
[176,178,[[0,"It’s dark inside"]]],
[179,180,[[0,"It’s where my demons hide"]]],
[181,184,[[0,"It’s where my demons hide"]]]];

var show = null;
var current = 0;

function init() {
    // Create the karaoke engine and get a show instance
    var karaoke = new RiceKaraoke(RiceKaraoke.simpleTimingToTiming(timings));
    var renderer = new SimpleKaraokeDisplayEngine('karaoke-display', numDisplayLines);
    show = karaoke.createShow(renderer, numDisplayLines);
}

function updatePlayerInfo() {
  if (player.getPlayerState() == YT.PlayerState.PLAYING) {
    show.render(player.getCurrentTime(), false);
  } else if ((player.getPlayerState() != YT.PlayerState.PAUSED) 
              && (player.getPlayerState() != YT.PlayerState.BUFFERING))
  {
    show.reset();
  }
}

init();