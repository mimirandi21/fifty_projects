function changeAnimal(option) {
	let chosenAnimal = document.querySelectorAll(`.${option}`);
	chosenAnimal.forEach((animal) => {
		animal.style.cssText += "display: inherit";
	});
}
