const nav = document.querySelector("nav");
const navOpener = document.querySelector("#nav-open");
const navCloser = document.querySelector("#nav-close");
const reveals = document.querySelectorAll('.reveal');
const windowheight = window.innerHeight;
const revealpoint = 150;

navOpener.addEventListener("click", () => {
    if(nav.classList === "active") return;
    nav.classList.add("active");
})

navCloser.addEventListener("click", () => {
    if(nav.classList === "") return;
    nav.classList.remove("active");
})

window.addEventListener('scroll', () => {
    for(let i = 0; i < reveals.length; i++) {
        let revealtop = reveals[i].getBoundingClientRect().top;
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
});