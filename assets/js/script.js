window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
	let menuToggle = document.querySelector(".toggle");
	let menu = document.querySelector(".menu");
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
}

// modal-box

let openbtn = document.querySelector(".js-open");
let modalBg = document.getElementById("modal-bg");
let modalBox = document.getElementById("modal-box");

openbtn.addEventListener("click", function (event) {
	event.preventDefault();
	modalBg.classList.add("active");
	modalBox.classList.add("active");
});

let closeBtns = document.querySelectorAll(".js-btn");
closeBtns.forEach((node) => {
	node.addEventListener("click", function (e) {
		modalBg.classList.remove("active");
		modalBox.classList.remove("active");
	});
});

// Send email form
let sendButton = document.getElementById("myform");

sendButton.addEventListener("submit", function (event) {
	event.preventDefault(sendButton);
	var tempParams = {
		from_name: document.getElementById("name").value,
		from_email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};
	emailjs
		.send("service_6pcnbro", "template_nktigru", tempParams)
		.then(function (response) {
			console.log("sucess", response.status);
		});
});
function validate() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;
	let error_message = document.getElementById("error_message");
	error_message.style.padding = "10px";

	var text;
	if (name.length <= 0) {
		text = "Please Enter Your Name";
		error_message.innerHTML = text;
		return false;
	}
	if (email.indexOf("@") == -1 || email.length < 6) {
		text = "Please Enter a Valid Email Address";
		error_message.innerHTML = text;
		return false;
	}
	if (message.length <= 0) {
		text = "Please Enter a Message";
		error_message.innerHTML = text;
		return false;
	}
	alert("Form Submitted Successfully!");
	return true;
}
