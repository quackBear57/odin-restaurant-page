import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

loadHome();

const divContent = document.querySelector('#content');

const btnHome = document.querySelector("#btnHome");
const btnMenu = document.querySelector("#btnMenu");
const btnAbout = document.querySelector("#btnAbout");

btnHome.addEventListener('click', () => {
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
    loadHome();
});

btnMenu.addEventListener('click', () => {
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
    loadMenu();
});

btnAbout.addEventListener('click', () => {
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
    loadAbout();
});