// const names = document.querySelector("#name");
// const email = document.querySelector("#email");
// const subject = document.querySelector("#subject");
// const message = document.querySelector("#message");
// const submit = document.querySelector("button");
// let finalName = "";
// names.addEventListener("input", (e) => {
// 	// console.log(e);
// 	// console.log(e.target.value);
// 	finalName = e.target.value;
// 	emailValidate(finalName, finalEmail, finalSubject, finalMessage);
// });
// let finalEmail = "";
// email.addEventListener("input", (e) => {
// 	finalEmail = e.target.value;
// 	emailValidate(finalName, finalEmail, finalSubject, finalMessage);
// });
// let finalSubject = "";
// subject.addEventListener("input", (e) => {
// 	finalSubject = e.target.value;
// 	emailValidate(finalName, finalEmail, finalSubject, finalMessage);
// });
// let finalMessage = "";
// message.addEventListener("input", (e) => {
// 	finalMessage = e.target.value;
// 	emailValidate(finalName, finalEmail, finalSubject, finalMessage);
// });

// function emailValidate(finalName, finalEmail, finalSubject, finalMessage) {
// 	if (finalName && finalEmail && finalSubject && finalMessage) {
// 		submit.style.display = "block";
// 		submit.addEventListener("click", (e) => {
// 			e.preventDefault();
// 			e.stopPropagation();
// 			submit.value = "Sending...";
// 			const serviceID = "default_service";
// 			const templateID = "template_6z56drh";
// 			var template = {
// 				name: finalName,
// 				email: finalEmail,
// 				subject: finalSubject,
// 				message: finalMessage,
// 			};
// 			emailjs.send(serviceID, templateID, template).then(
// 				() => {
// 					btn.value = "Send Email";
// 					submit.disabled = false;
// 					alert("Sent!");
// 				},
// 				(err) => {
// 					submit.value = "Send Email";
// 					submit.disabled = false;
// 					alert(JSON.stringify(err));
// 				}
// 			);
// 		});
// 	} else {
// 		submit.style.display = "none";
// 	}
// }

// emailValidate(finalName, finalEmail, finalSubject, finalMessage);
// const names = document.querySelector("#name");
// const email = document.querySelector("#email");
// const subject = document.querySelector("#subject");
// const message = document.querySelector("#message");
// const submit = document.querySelector("button");

// let finalName = "";
// let finalEmail = "";
// let finalSubject = "";
// let finalMessage = "";

// // Input event listeners
// names.addEventListener("input", (e) => {
// 	finalName = e.target.value;
// 	emailValidate();
// });
// email.addEventListener("input", (e) => {
// 	finalEmail = e.target.value;
// 	emailValidate();
// });
// subject.addEventListener("input", (e) => {
// 	finalSubject = e.target.value;
// 	emailValidate();
// });
// message.addEventListener("input", (e) => {
// 	finalMessage = e.target.value;
// 	emailValidate();
// });

// // Function to validate and attach a single event listener
// function emailValidate() {
// 	if (finalName && finalEmail && finalSubject && finalMessage) {
// 		submit.style.display = "block";

// 		// Remove previous event listeners to prevent multiple requests
// 		submit.replaceWith(submit.cloneNode(true));
// 		const newSubmit = document.querySelector("button");

// 		newSubmit.addEventListener("click", (e) => {
// 			e.preventDefault();
// 			e.stopPropagation();

// 			newSubmit.disabled = true; // Disable button to prevent multiple clicks
// 			newSubmit.value = "Sending...";

// 			const serviceID = "default_service";
// 			const templateID = "template_6z56drh";
// 			const template = {
// 				name: finalName,
// 				email: finalEmail,
// 				subject: finalSubject,
// 				message: finalMessage,
// 			};

// 			emailjs.send(serviceID, templateID, template).then(
// 				() => {
// 					newSubmit.value = "Send Email";
// 					newSubmit.disabled = false; // Re-enable button
// 					alert("Sent!");
// 				},
// 				(err) => {
// 					newSubmit.value = "Send Email";
// 					newSubmit.disabled = false; // Re-enable button
// 					alert(JSON.stringify(err));
// 				}
// 			);
// 		});
// 	} else {
// 		submit.style.display = "none";
// 	}
// }

// // Initial validation on page load
// emailValidate();
