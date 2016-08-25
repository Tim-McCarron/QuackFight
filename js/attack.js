function attack() {
	if (playerAttack.attack == true) {
		if (playerAttack.counter < 4) {
			batObj.sHeight += 134;
			batObj.sy += 134;
			playerAttack.counter++;
		}
		else {
			batObj.sHeight = 134;
			batObj.sy = 0;
			playerAttack.attack = false;
			playerAttack.counter = 0;
		}
	}
}