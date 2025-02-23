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
