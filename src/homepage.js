import cafeImg from './images/cafe.jpg';

export function renderHomepage() {
    const content = document.querySelector('#content');
    const welcomeText = document.createElement('div');
    welcomeText.textContent = 'Welcome to Coffee Talk Cafe!';

    const image = document.createElement('img');
    image.src = cafeImg;

    const description = document.createElement('div');
    description.textContent = 'Site under construction, please stand by.';

    content.append(welcomeText, image, description);

    return content;
}