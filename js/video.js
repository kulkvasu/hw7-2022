var video = document.querySelector("video");
var speed = 1.0;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	var video = document.querySelector("video");
	video.autoplay = false;
	console.log("No Autoplay")
	video.loop = false;
	console.log("No Loop")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	console.log("Video Played");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Video Paused");
});

document.querySelector("#slower").addEventListener("click", function() {
	speed = speed - .1;
	video.playbackRate = speed;
	console.log("Slower Speed: "+ speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	speed += .1;
	video.playbackRate = speed;
	console.log("Faster Speed: "+ speed);
});

document.querySelector("#skip").addEventListener("click", function() { 
	video.pause();
	if (video.currentTime <= video.duration){
		currentTime = video.currentTime;
		currentTime = currentTime + 10;
		video.currentTime = currentTime;
		console.log("Current Location: " + currentTime);
		video.play();
	}
	else{
		video.currentTime = 0;
		video.play();
		console.log("Current Location: " + currentTime);
	}
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.getElementById('volume').innerHTML = video.volume * 100 + '%';
		document.getElementById('mute').innerHTML = 'Mute';	
	}
	else{
		video.muted = true;
		document.getElementById('volume').innerHTML = 'Muted';
		document.getElementById('mute').innerHTML = 'Unmute';
	}

});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = (document.querySelector("#slider").value)/ 100;
	document.querySelector('#volume').innerHTML = slider.value + "%";
	console.log("Slider Volume: " + slider.value);
});


document.querySelector("#vintage").addEventListener("click", function(){
	document.querySelector("video").classList.add("oldSchool");
	console.log("Old School Filter");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
	console.log("Original Filter");
});
