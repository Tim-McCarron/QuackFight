function detectCollision(one, two) {
	var xx = false;
	var yy = false;
	var xDif;
	var yDif;

	if (one.x <= two.x) {
		xDif = two.x - one.x;
	} else {
		xDif = one.x - two.x;
	}

	if (one.y <= two.y) {
		yDif = two.y - one.y;
	} else {
		yDif = one.y - two.y;
	}

	if (xDif <= ((one.dWidth/2) + (two.dWidth/2)) /2) {
		xx = true;
	}

	if (yDif <= ((one.dHeight/2) + (two.dHeight/2)) /1.5) {
		yy = true;
	}

	if (yy == true && xx == true) {
		console.log('shit!');
	}
}