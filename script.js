let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let navlinks = document.querySelector(".nav-links");
let overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
	close.classList.add("active");
	hamburger.classList.remove("active");
	navlinks.classList.add("navlink-active");
	overlay.classList.add("overlay-active");
});

const closeFunction = () => {
	hamburger.classList.add("active");
	close.classList.remove("active");
	navlinks.classList.remove("navlink-active");
	overlay.classList.remove("overlay-active");
};

close.addEventListener("click", closeFunction);

window.addEventListener("click", (e) => {
	if (!e.target.matches(".hamburger")) {
		closeFunction();
	}
});
