const ham = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

ham.addEventListener("click", (e) => {
	e.stopPropagation();
	nav.classList.remove("hide-ham");
	nav.classList.add(".show-ham");
	e.currentTarget.classList.add("hide-ham");
	navbarAnimation();
});

close.addEventListener("click", (e) => {
	e.stopPropagation();
	nav.classList.add("hide-ham");
	nav.classList.remove(".show-ham");
	ham.classList.remove("hide-ham");
	navbarAnimation();
	hamburgerAnimation();
});

//swiper js --------->code
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

document.querySelectorAll(".swiper-slide").forEach((ele) => {
	ele.addEventListener("mouseover", function () {
		swiper.autoplay.stop();
	});
	ele.addEventListener("mouseleave", function () {
		swiper.autoplay.start();
	});
});

//obsever number

const numbersD = document.querySelector(".project-box");
const observers = new IntersectionObserver(
	(entries, observers) => {
		const [entry] = entries;

		if (!entry.isIntersecting) {
			// const numDetail = document.querySelectorAll(".number");
			// numDetail.forEach((curEle) => {
			// 	curEle.innerText = "0+";
			// });
			return;
		} else if (entry.isIntersecting === true) {
			const numDetail = document.querySelectorAll(".number");
			const speed = 200;

			numDetail.forEach((curEle) => {
				const updateNumber = () => {
					const target = parseInt(curEle.dataset.number);
					const actual = parseInt(curEle.innerText);
					const increment = Math.max(1, Math.trunc(target / speed));
					if (actual < target) {
						curEle.innerText = `${actual + increment}+`;
						setTimeout(updateNumber, 20);
					}
				};

				updateNumber();
			});
		}
		observers.unobserve(numbersD);
	},
	{
		root: null,
		threshold: 0.5,
	}
);

observers.observe(numbersD);

// animation on scroll using gsap
if (window.innerWidth > 600) {
	Gsap();
}
if (window.innerWidth <= 1024) {
	detailsAnimationMobile();
}
featureBoxAnimation();
function Gsap() {
	let sections = gsap.utils.toArray(".feature-name");
	let scrollTween = gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		scrollTrigger: {
			trigger: ".feature",
			pin: true,
			scrub: 2,
			end: "+=3000",
		},
	});
	// gsap.set(".feature-name span", { y: -100 });
	// ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });
	gsap.from(".name-2", {
		opacity: 0,
		duration: 0.3,
		scrollTrigger: {
			scroller: "body",
			trigger: ".name-2",
			containerAnimation: scrollTween,
			start: "left 70%",
			toggleActions: "play none none reset",
			id: 1,
		},
	});
	gsap.from(".name-3", {
		opacity: 0,
		duration: 0.3,
		scrollTrigger: {
			scroller: "body",
			trigger: ".name-3",
			containerAnimation: scrollTween,
			start: "left 80%",
			toggleActions: "play none none reset",
			id: 2,
		},
	});
	gsap.from(".name-4", {
		opacity: 0,
		duration: 0.3,
		// ease: "elastic",
		scrollTrigger: {
			scroller: "body",
			trigger: ".name-4",
			containerAnimation: scrollTween,
			start: "left 80%",
			toggleActions: "play none none reset",
			id: 3,
		},
	});
}
landingPageAnimation();
function landingPageAnimation() {
	var t1 = gsap.timeline();

	t1.from(".span-1", {
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		x: -100,
	});

	t1.from(".span-2", {
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		x: -100,
	});

	t1.from(
		".span-3",
		{
			opacity: 0,
			duration: 0.4,
			delay: 0.3,
			x: -100,
		},
		"anim"
	);
	t1.from(
		".img-1",
		{
			opacity: 0,
			duration: 0.4,
			delay: 0.3,
			x: 100,
		},
		"anim"
	);
}

function navbarAnimation() {
	var t1 = gsap.timeline();
	t1.from(
		"nav ul li ",
		{
			x: -15,
			opacity: 0,
			duration: 0.1,
			delay: 0.1,
			stagger: 0.1,
		},
		"same-time"
	);
	t1.from(
		".close",
		{
			x: 15,
			opacity: 0,
			duration: 0.3,
			delay: 0.2,
		},
		"same-time"
	);
}

function hamburgerAnimation() {
	gsap.from(".hamburger", {
		x: 15,
		opacity: 0,
		duration: 0.1,
		delay: 0.2,
	});
}

function featureBoxAnimation() {
	var t1 = gsap.timeline();
	t1.from(".monogram", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		scrollTrigger: {
			trigger: ".feature-box",
			scroller: "body",
			start: "top 60%",
			end: "top 60%",
			scrub: 2,
			id: 1,
		},
	});
	t1.from(".company-name", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.4,
		scrollTrigger: {
			trigger: ".feature-box",
			scroller: "body",

			start: "top 50%",
			end: "top 50%",
			scrub: 2,
			id: 2,
		},
	});
	t1.from(".feature-details span", {
		x: -100,
		opacity: 0,
		duration: 0.5,
		delay: 0.4,
		stagger: 0.2,
		scrollTrigger: {
			trigger: ".feature-box",
			scroller: "body",
			start: "top 40%",
			end: "top 40%",
			scrub: 2,
			id: 3,
		},
	});
}

function detailsAnimationMobile() {
	// var t1 = gsap.timeline();
	gsap.from(".card-1", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		scrollTrigger: {
			trigger: ".card-1",
			scroller: "body",
			start: "top 80%",
			end: "top 80%",
			scrub: 2,
		},
	});
	gsap.from(".card-2", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		scrollTrigger: {
			trigger: ".card-2",
			scroller: "body",
			start: "top 80%",
			end: "top 80%",
			scrub: 2,
		},
	});
	gsap.from(".card-3", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		scrollTrigger: {
			trigger: ".card-3",
			scroller: "body",
			start: "top 80%",
			end: "top 80%",
			scrub: 2,
		},
	});
	gsap.from(".card-4", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		scrollTrigger: {
			trigger: ".card-4",
			scroller: "body",
			start: "top 80%",
			end: "top 80%",
			scrub: 2,
		},
	});
	gsap.from(".card-5", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		scrollTrigger: {
			trigger: ".card-5",
			scroller: "body",
			start: "top 80%",
			end: "top 80%",
			scrub: 2,
		},
	});
	gsap.from(".card-6", {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: 0.3,
		scrollTrigger: {
			trigger: ".card-6",
			scroller: "body",
			start: "top 80%",
			end: "top 80%",
			scrub: 2,
		},
	});
}
