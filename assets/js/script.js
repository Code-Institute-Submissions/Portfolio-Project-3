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

function EnableDisable(msg) {
	//Reference the Button.
	var btnSubmit = document.querySelector('input[type="submit"]');

	//Verify the TextBox value.
	if (msg.value.trim() != "") {
		//Enable the TextBox when TextBox has value.
		btnSubmit.disabled = false;
	} else {
		//Disable the TextBox when TextBox is empty.
		btnSubmit.disabled = true;
	}
}
let sendButton = document.getElementById("send");

sendButton.addEventListener("click", function (event) {
	event.preventDefault();
	var tempParams = {
		from_name: document.getElementById("fromName").value,
		from_email: document.getElementById("fromEmail").value,
		message: document.getElementById("msg").value,
	};
	emailjs
		.send("service_lzkzpo6", "template_7h9n81z", tempParams)
		.then(function (response) {
			console.log("sucess", response.status);
			location.reload();
			alert(
				"THANK YOU FOR YOUR MESSAGE, I WILL GET BACK TO YOU AS SOON AS POSSIBLE"
			);
		});
});
