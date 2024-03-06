async function foxes() {
	let input = document.getElementById("input").value;
	input = Number(input);
	let img = document.getElementById("img");
	let api = "https://randomfox.ca/floof";
	let data = await fetch(api);
	let response = await data.json();
	if (input == "") {
		alert("Please enter a number");
	} else if (input > 120 || input <= 0) {
		alert("Number needs to be greater than 0 but less than 120");
	} else {
		img.src = `https://randomfox.ca/images/${input}.jpg`;
	}
	console.log(response);
}
