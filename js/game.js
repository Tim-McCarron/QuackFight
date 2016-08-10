$(document).ready(function () {

    $('body').on('keydown', function(e) {
      if (e.which==68){
          right = true;
      } else if (e.which==87) {
      	up = true;
      }
      else if (e.which==83) {
      	down = true;
      }
      else if (e.which==65) {
      	left = true;
      }
    });

    $('body').on('keyup', function(e) {
      if (e.which==68){
          right = false;
      } else if (e.which==87) {
      	up = false;
      }
      else if (e.which==83) {
      	down = false;
      }
      else if (e.which==65) {
      	left = false;
      }
    });


});

var c = document.getElementById("gameWindow");
var ctx = c.getContext("2d");
map = new Image();
duck = new Image();
quack = new Image();
map.src = "sprites/map.jpg";
duck.src = "sprites/duck-R.png";
quack.src = "sprites/duck-R.png";
duck.id = "player";
var mapObj = {"img": map, "x": 0, "y": 0, "width": 1000, "height": 800};
var duckObj = {"img": duck, "x": 0, "y": 0, "width": 25, "height": 25};
var quackObj = {"img": quack, "x": 50, "y": 50, "width": 25, "height": 25};
var images = [mapObj, duckObj, quackObj];
var left = false;
var right = false;
var up = false;
var down = false;

window.onload = function() {
};

setInterval(function() {

	drawImages(images);
	movePlayer();
	detectCollision(duckObj, quackObj);

	
}, 50);

function movePlayer() {
	if (up == true) {
		duckObj.y = duckObj.y - 5;
	}
	if (down == true) {
		duckObj.y = duckObj.y + 5;
	}
	if (left == true) {
		duckObj.x = duckObj.x - 5;
		duck.src = 'sprites/duck-L.png';
	}
	if (right == true) {
		duckObj.x = duckObj.x +5;
		duck.src = 'sprites/duck-R.png';
	}
}

function drawImages(images) {
	for (let i = 0; i < images.length; i++) {
		ctx.drawImage(images[i].img, images[i].x, images[i].y, images[i].width,	images[i].height);
	}
}

