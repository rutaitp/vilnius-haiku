var file;
var h_text;
var h_author;
var choices = [];
var parText;
var parAuthor;
var parDiv;

function preload() {
	file = loadJSON("./haiku.json");
}

function setup() {
	noCanvas();

	//get a random haiku from a json file
	for (var i=0; i<file.haikus.length; i++) {
		choices[i] = i;
	}

	//generate a random haiku from JSON file
	function generateHaikuFromJSON() {
		index = choices[Math.floor(Math.random()*choices.length)];
		// console.log("index " + index);
		choices.splice(index,1);

		if (choices.length == 0) {
			for (var i=0; i<file.haikus.length; i++) {
				choices[i] = i;
			}
		}

		h_text = file.haikus[index].haiku_text;
		h_author = file.haikus[index].author;

		// console.log(h_text);
		// console.log(h_author);
		return h_text;
		return h_author;

	}

	generateHaikuFromJSON();

}

function draw() {

	//and display on the page
	//div
	parDiv = document.getElementById("display_haiku");
	//text
	parText = document.getElementById("h_text");
	parText.innerHTML = h_text + "<br>";
	//author
	parAuthor = document.getElementById("h_author");
	parAuthor.innerHTML = h_author;

	setInterval(function() {
		window.location.reload();
	}, 3000);
}

	// setInterval(function() {
	// 	$('#display_haiku').location.reload();
	// }, 1000);

	// setInterval( function() {
	// 	$('#display_haiku').load(window.location.href + ' #display_haiku');
	// }, 1000);

	// var auto_refresh = setInterval(function () {
 //    $('#display_haiku').fadeOut('slow', function() {
 //        $(this).load('index.html', function() {
 //            $(this).fadeIn('slow');
 //        });
 //    });
	// }, 5000); // refresh every 15000 milliseconds
