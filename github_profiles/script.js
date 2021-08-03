const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const user = search.nodeValue;

	if (user) {
		getUser(user);
		search.value = "";
	}
});

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);
	} catch (err) {
		console.log(err);
	}
}
