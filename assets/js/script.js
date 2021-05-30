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
function validate() {
	let name = document.querySelector(".username");
	let email = document.querySelector(".email");
	let msg = document.querySelector(".message");
	let btn = document.querySelector(".submit");

	btn.addEventListener("click", (e) => {
		e.preventDefault();
		if (email.value.indexOf("@") == -1) {
			emailerror();
			if (name.value == "" || email.value == "" || msg.value == "") {
				emptyerror();
			}
		} else {
			sendmail(name.value, email.value, msg.value);
			success();
		}
	});
}
validate();

function sendmail(name, email, msg) {
	emailjs.send("service_6pcnbro", "template_hbodrvd", {
		from_name: name,
		from_email: email,
		message: msg,
	});
}
function emptyerror() {
	Swal.fire({
		icon: "error",
		title: "Error",
		text: "Please fill all the Fields",
	});
}

function emailerror() {
	Swal.fire({
		icon: "error",
		title: "Did you Fill all the Inputs Correctly? ",
		text: "Wrong Email Format!",
	});
}

function success() {
	Swal.fire({
		icon: "success",
		title: "Success...",
		text: "Your Message has Been Sent",
	});
}
