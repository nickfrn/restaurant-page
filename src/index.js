import { renderHomepage } from "./homepage.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');
const content = document.querySelector('#content');

renderHomepage();

home.addEventListener('click', () => {
    content.innerHTML = '';

    renderHomepage();
}); 
menu.addEventListener('click', () => {
    content.innerHTML = '';

    renderMenu();
});
about.addEventListener('click', () => {
    content.innerHTML = '';

    renderAbout();
});