const ham = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

ham.addEventListener("click", (e) => {
	e.stopPropagation();
	nav.classList.remove("hide-ham");
	nav.classList.add(".show-ham");
	e.currentTarget.classList.add("hide-ham");
	console.log("click");
});

close.addEventListener("click", (e) => {
	e.stopPropagation();
	nav.classList.add("hide-ham");
	nav.classList.remove(".show-ham");
	ham.classList.remove("hide-ham");
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

Gsap();
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
