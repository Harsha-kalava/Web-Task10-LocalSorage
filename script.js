const btn = document.getElementById("btn");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const msg = document.querySelector(".msg");

btn.addEventListener("click", onSubmit);

function onSubmit(e) {
	e.preventDefault();
	console.log(inputName.value, inputEmail.value);
	if (inputName.value === "" || inputEmail.value === "") {
		// alert('Please enter all fields');
		msg.classList.add("error");
		msg.innerHTML = "Please enter all fields";

		// Remove error after 3 seconds
		setTimeout(() => msg.remove(), 3000);
	} else {
		localStorage.setItem("name", inputName.value);
		localStorage.setItem("Email", inputEmail.value);
	}
}
