const ham = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const nav = document.querySelector("nav")

ham.addEventListener("click", (e) => {
    e.stopPropagation()
    nav.classList.remove("hide-ham")
    nav.classList.add(".show-ham")
    e.currentTarget.classList.add("hide-ham")
    console.log("click");
})

close.addEventListener("click", (e) => { 
    e.stopPropagation()
    nav.classList.add("hide-ham")
    nav.classList.remove(".show-ham")
    ham.classList.remove("hide-ham")
})