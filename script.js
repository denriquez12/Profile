//Move Link png to the left then to the right
function Move() {
	let link = document.getElementById("link");
	let pos = parseInt(window.getComputedStyle(link,null).getPropertyValue('left'));
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

function changeAboutColor() {
	//let elem = document.getElementById("about");
	let divElem = document.getElementById("topic1");

	let colors = ["red", "blue", "green", "teal", "darkMagenta", "blueviolet",
	 							"darkcyan", "coral", "goldenrod", "salmon"]
	let rand = Math.floor((Math.random() * 10) + 1);
//  elem.style.color = colors[rand];
	divElem.style.backgroundColor = colors[rand];
}

function changeExperienceColor() {
	//let elem = document.getElementById("experience");
	let divElem = document.getElementById("topic2");
	let colors = ["red", "blue", "green", "teal", "darkMagenta", "blueviolet",
	 							"darkcyan", "coral", "goldenrod", "salmon"]
	let rand = Math.floor((Math.random() * 10) + 1);
  //elem.style.color = colors[rand];
	divElem.style.backgroundColor = colors[rand];
}

function changeInterestsColor() {
	//let elem = document.getElementById("interests");
	let divElem = document.getElementById("topic3");
	let colors = ["red", "blue", "green", "teal", "darkMagenta", "blueviolet",
	 							"darkcyan", "coral", "goldenrod", "salmon"]
	let rand = Math.floor((Math.random() * 10) + 1);
  //elem.style.color = colors[rand];
	divElem.style.backgroundColor = colors[rand];
}



function changeAllColor() {
	let elem = document.getElementsByClassName("chColor");
	let colors = ["red", "blue", "green", "teal", "darkMagenta", "blueviolet",
	 							"darkcyan", "coral", "goldenrod", "salmon"]
	let rand;
	let i;
	for (i = 0; i < elem.length; i++) {
			rand = Math.floor((Math.random() * 10) + 1);
    	elem[i].style.color = colors[rand];
	}

}
