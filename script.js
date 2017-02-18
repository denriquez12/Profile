function Move() {
	let link = document.getElementById("link");
	let pos = parseInt(window.getComputedStyle(document.getElementById('link'),null).getPropertyValue('left'));
	let beginPosition = pos;
	let rightWalk = ["Link\\Link_R_Move1.png", "Link\\Link_R_Move2.png"];
	let leftWalk = ["Link\\Link_L_Move1.png", "Link\\Link_L_Move2.png"];
	let forward = "Link\\Link.png";
	let id = setInterval(box, 8);
	let i = 0;
	
	//document.write(leftWalk[0] + " AND " + leftWalk[1]);
	function box() {
		if (pos == 10) {
			link.src = forward;
			clearInterval(id);
			i = 0;
		}else {
			pos--;
			i++;
			link.src = leftWalk[i%2];
			link.style.left = pos + 'px';
		}
	}
}