// JS file for ic-05
// Rachel Cassway
// Last Modified: 09.23/2022

let counter = 0;
function buttonCount() {

	// update counter
	counter += 1;

	let text = "Number of times button clicked: " + counter;

	let buttonDiv = document.getElementById("button-div");

	// update text
	buttonDiv.innerHTML = text;
}