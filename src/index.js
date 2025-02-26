import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

loadHome();



const btnHome = document.querySelector("#btnHome");
const btnMenu = document.querySelector("#btnMenu");
const btnAbout = document.querySelector("#btnAbout");

function clearDivContent() {
    const divContent = document.querySelector('#content');
    while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
    }
}

btnHome.addEventListener('click', () => {
    clearDivContent();
    loadHome();
});

btnMenu.addEventListener('click', () => {
    clearDivContent();
    loadMenu();
});

btnAbout.addEventListener('click', () => {
    clearDivContent();
    loadAbout();
});