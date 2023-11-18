var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});
//play
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
  });
//pause
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
  });
//slow down
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down Video");
	video.playbackRate -= 0.1;
	console.log("The video speed is: " + video.playbackRate);
  });
//speed up
document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed Up Video");
	video.playbackRate += 0.1;
	console.log("The video speed is " + video.playbackRate);
  });
//skip ahead
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead Video");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time of the video is: " + video.currentTime);
  });
//mute
document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute Video");
	if (video.muted == true) {
	  video.muted = false;
	  document.querySelector("#mute").innerHTML = "Mute";
	} else {
	  video.muted = true;
	  document.querySelector("#mute").innerHTML = "Unmute";
	}
  });
//volume slider
document.querySelector("#slider").addEventListener("input", function () {
	console.log("Slider");
	video.volume = document.querySelector('#slider').value * 0.01;
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	console.log("The current video volume is: " + video.volume+ "%");
  });

//styled
  document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Old School");
	video.classList.add("oldSchool");
  });
//original
  document.querySelector("#orig").addEventListener("click", function () {
	console.log("Original");
	video.classList.remove("oldSchool");
  });
