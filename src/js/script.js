import { CountUp } from 'countup.js';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';

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

const options = { duration: 5 };
let countOne = new CountUp('count-one', 1351, options);
let countTwo = new CountUp('count-two', 24, options);
let countThree = new CountUp('count-three', 29, options);
countOne.start()
countTwo.start()
countThree.start()