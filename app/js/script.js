const bgImg = document.querySelector(".bgImg");

function changeBg() {
	return window.matchMedia("(min-width: 800px)").matches
		? (bgImg.src = "../images/pattern-background-desktop.svg")
		: (bgImg.src = "../images/pattern-background-mobile.svg");
}

// fires everytime window screen resizes
window.addEventListener("resize", changeBg);

// run one time
changeBg();
