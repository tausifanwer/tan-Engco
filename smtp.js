const names = document.querySelector("#name");
const email = document.querySelector("#email");
const mNumber = document.querySelector("#number");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submit = document.querySelector("button");
let finalName = "";
names.addEventListener("input", (e) => {
	finalName = e.target.value;
	emailValidate(finalName, finalEmail, finalSubject, finalMessage, finalMobile);
});
let finalEmail = "";
email.addEventListener("input", (e) => {
	finalEmail = e.target.value;
	emailValidate(finalName, finalEmail, finalSubject, finalMessage, finalMobile);
});
let finalMobile = "";
mNumber.addEventListener("input", (e) => {
	finalMobile = e.target.value;
	emailValidate(finalName, finalEmail, finalSubject, finalMessage, finalMobile);
});
let finalSubject = "";
subject.addEventListener("input", (e) => {
	finalSubject = e.target.value;
	emailValidate(finalName, finalEmail, finalSubject, finalMessage, finalMobile);
});
let finalMessage = "";
message.addEventListener("input", (e) => {
	finalMessage = e.target.value;
	emailValidate(finalName, finalEmail, finalSubject, finalMessage, finalMobile);
});
submit.addEventListener("click", (e) => {
	e.stopPropagation();
	submit.innerText = "Sending...";
	const serviceID = "default_service";
	const templateID = "template_5d5vugy";
	var template = {
		name: finalName,
		email: finalEmail,
		mobile: finalMobile,
		subject: finalSubject,
		message: finalMessage,
	};
	emailjs.send(serviceID, templateID, template).then(
		(e) => {
			submit.value = "Send Email";
			submit.disabled = false;
			submit.innerText = "Send Message";
			names.value = "";
			email.value = "";
			subject.value = "";
			message.value = "";
			mNumber.value = "";
			finalEmail = "";
			finalName = "";
			finalSubject = "";
			finalMessage = "";
			finalMobile = "";
			emailValidate(
				finalName,
				finalEmail,
				finalSubject,
				finalMessage,
				finalMobile
			);
		},
		(err) => {
			submit.value = "Send Email";
			submit.disabled = false;
		}
	);
});
function emailValidate(
	finalName,
	finalEmail,
	finalSubject,
	finalMessage,
	finalMobile
) {
	if (
		finalName !== "" &&
		finalMobile !== "" &&
		finalEmail !== "" &&
		finalSubject !== "" &&
		finalMessage !== ""
	) {
		submit.style.display = "block";
	} else {
		submit.style.display = "none";
	}
}

emailValidate(finalName, finalEmail, finalSubject, finalMessage);
