import "./style.css";

export function renderHomepage() {
    const content = document.querySelector('#content');
    const welcomeText = document.createElement('div');
    welcomeText.textContent = 'Welcome to our very original Cafe!';
    welcomeText.style.backgroundColor = 'rgba(0, 0, 0, .4)';

    const description = document.createElement('div');
    description.textContent = 'Site under construction, please stand by. (I\'ll probably style the site when I\'m done with TOP)';
    description.style.backgroundColor = 'rgba(0, 0, 0, .4)';

    content.append(welcomeText, description);

    return content;
}