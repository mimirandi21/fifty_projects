const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");

smallCups.forEach((cup, idx) => {
	cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
	if (
		smallCups[idx].classList.contains("full") &&
		!smallCups[idx].nextElementSibling.classList.contains("full")
	) {
		idx--;
	}

	smallCups.forEach((cup, index) => {
		if (index <= idx) {
			cup.classList.add("full");
		} else {
			cup.classList.remove("full");
		}
	});
}
