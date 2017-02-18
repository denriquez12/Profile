function Move() {
	let link = document.getElementById("link");
	window.alert("Link left = %s", link.style.left);
	let pos = parseInt(link.style.left) + "<br>";
	window.alert("POS = %d", pos);
	let id = setInterval(box, 10);
	
	function box() {
		if (pos == 0) {
			clearInterval(id);
		}else {
			pos--;
			link.style.left = pos + 'em';
		}
	}
}