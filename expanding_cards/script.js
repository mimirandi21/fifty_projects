function changeAnimal(option) {
	let cat = document.querySelector(".cat");
	let dog = document.querySelector(".dog");
	if (option === "cat") {
		dog.style.cssText += "display: none";
		cat.style.cssText += "display: flex";
	} else {
		cat.style.cssText += "display: none";
		dog.style.cssText += "display: flex";
	}
}

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add("active");
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
