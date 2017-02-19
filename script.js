//Move Link png to the left then to the right
function Move() {
	let link = document.getElementById("link");
	let pos = parseInt(window.getComputedStyle(document.getElementById('link'),null).getPropertyValue('left'));
	let beginPosition = pos + 1;
	let rightWalk = ["Link\\Link_R_Move1.png", "Link\\Link_R_Move2.png"];
	let leftWalk = ["Link\\Link_L_Move1.png", "Link\\Link_L_Move2.png"];
	let forward = "Link\\Link.png";
	let id = setInterval(box, 8);
	let i = 0;
	let direction = "Left"


	function box() {
		if (pos === 60) {
			i = 0;
			link.src = forward;
			direction = "Right"
			link.style.left = pos + 'px';
			//Added to avoid inf loop
			pos++;
		}else {
				if (direction === "Left") {
					i++;
					link.src = leftWalk[i%2];
					link.style.left = pos + 'px';
					pos--;

				} else {
						//When Link returns to regular position end
						if (pos === beginPosition) {
							link.src = forward;
							clearInterval(id);
						} else {
								i++;
								link.src = rightWalk[i%2];
								link.style.left = pos + 'px';
								pos++;
						}
				}
		}
	}
}
