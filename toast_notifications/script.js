let toasts = document.getElementById("toasts");
let button = document.getElementById("button");

// button.addEventListener("click", () => createNotification("wrong number"));

// function createNotification(message) {
// 	const notif = document.createElement("div");
// 	notif.classList.add("toast");
// 	notif.innerText = message;

// 	toasts.appendChild(notif);
// }

const messages = [
	"Message One",
	"Message Two",
	"Message Three",
	"Message Four",
];

button.addEventListener("click", () => createNotification(null, "failure"));

function createNotification(message = null, type = null) {
	const notif = document.createElement("div");
	notif.classList.add("toast");
	notif.classList.add(type ? type : "info");
	notif.innerText = message ? message : getRandomMessage();

	toasts.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
