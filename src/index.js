import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

loadHome();

const btnHome = document.querySelector("#btnHome");
const btnMenu = document.querySelector("#btnMenu");
const btnAbout = document.querySelector("#btnAbout");

btnHome.addEventListener('click', () => {
    loadHome();
});

btnMenu.addEventListener('click', () => {
    loadMenu();
});

btnAbout.addEventListener('click', () => {
    loadAbout();
});