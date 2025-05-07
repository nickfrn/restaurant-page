import "./style.css";

export function renderMenu() {
    const content = document.querySelector('#content');
    const test = document.createElement('h1');
    test.textContent = 'TEST';

    content.appendChild(test);

    return content;
}