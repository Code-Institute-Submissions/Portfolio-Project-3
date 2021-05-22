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
let sendButton = document.getElementById("send");

sendButton.addEventListener("click", function (event) {
	event.preventDefault();
	var tempParams = {
		from_name: document.getElementById("fromName").value,
		from_email: document.getElementById("fromEmail").value,
		message: document.getElementById("message").value,
	};
	emailjs
		.send("service_lzkzpo6", "template_7h9n81z", tempParams)
		.then(function (response) {
			console.log("sucess", response.status);
		});
});

function validateForm() {
	let i = document.forms["form"]["name"]["email"]["message"].value;
	if (i == "") {
		alert("All Fields need to be filled Out");
		return false;
	}
}
