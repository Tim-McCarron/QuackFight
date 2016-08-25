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

    $('body').on('keypress', function(e) {
      if (e.which==32) {
        playerAttack.attack = true;
      }
    });


});

var c = document.getElementById("gameWindow");
c.width = 1000;
c.height = 800;
var ctx = c.getContext("2d");

//weapons
var playerAttack = {
  "attack": false,
  "counter": 0
}

map = new Image();
duck = new Image();
quack = new Image();
map.src = "sprites/map.jpg";
duck.src = "sprites/duck-R.png";
quack.src = "sprites/duck-R.png";
duck.id = "player";
var mapObj = {"img": map, "sx": 0, "sy": 0, "sWidth": 1000, "sHeight": 800, "x": 0, "y": 0, "dWidth": 1000, "dHeight": 800};
var duckObj = {"img": duck, "sx": 0, "sy": 0, "sWidth": 100, "sHeight": 100, "x": 50, "y": 50,  "dWidth": 60, "dHeight": 60};
var quackObj = {"img": quack, "sx": 0, "sy": 0, "sWidth": 100, "sHeight": 100, "x": 50, "y": 50,  "dWidth": 60, "dHeight": 60};
var bat = new Image();
bat.src = "sprites/bat/bat-r.png";
var batObj = {"img": bat, "sx": 0, "sy": 0, "sWidth": 125, "sHeight": 134, "x": duckObj.x, "y": duckObj.y, "dWidth": 60, "dHeight": 60};
var images = [mapObj, duckObj, quackObj, batObj];
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
  attack();
	
}, 50);

function movePlayer() {
  var movespeed = 7;
	if (up == true) {
		duckObj.y = duckObj.y - movespeed;
    batObj.y = batObj.y - movespeed;
	}
	if (down == true) {
		duckObj.y = duckObj.y + movespeed;
    batObj.y = batObj.y + movespeed;
	}
	if (left == true) {
		duckObj.x = duckObj.x - movespeed;
    batObj.x = batObj.x - movespeed;
		duck.src = 'sprites/duck-L.png';
    bat.src = 'sprites/bat-L.png';
	}
	if (right == true) {
		duckObj.x = duckObj.x + movespeed;
    batObj.x = batObj.x + movespeed;
		duck.src = 'sprites/duck-R.png';
    bat.src = 'sprites/bat/bat-r.png';
	}
}

function drawImages(images) {
	for (let i = 0; i < images.length; i++) {
    //          image, sourceX, sourceY, sourceWidth, sourceHeight, destWidth and destHeight
		ctx.drawImage(images[i].img, images[i].sx, images[i].sy, images[i].sWidth, images[i].sHeight, images[i].x, images[i].y, images[i].dWidth, images[i].dHeight);
	}
}

