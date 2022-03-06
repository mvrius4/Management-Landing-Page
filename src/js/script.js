const nav = document.querySelector("nav");
const navOpener = document.querySelector("#nav-open");
const navCloser = document.querySelector("#nav-close");

navOpener.addEventListener("click", () => {
    if(nav.classList === "active") return;
    nav.classList.add("active");
})

navCloser.addEventListener("click", () => {
    if(nav.classList === "") return;
    nav.classList.remove("active");
})