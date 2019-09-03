const testContainer = document.querySelector(".parallax");

// Grabs the url in the child a-tag and replaces the current url with it
testContainer.addEventListener("click", event => {
	if(event.target.classList.contains("parallaxImage")) {
		let targetURL = event.target.querySelector(".parallaxTitle").href;
		window.location.href = targetURL;
	}
});