import cafeImg from './images/cafe.jpg';

export function renderAbout() {
    const content = document.querySelector('#content');
    const image = document.createElement('img');
    image.src = cafeImg;

    const title = document.createElement('h1');
    title.textContent = 'About Us';

    const aboutText = document.createElement('p');
    aboutText.textContent = 'Very long text, trust me bro, a lot of stuff here, a lot of stuff.';

    content.append(title, aboutText);

    return content;
}