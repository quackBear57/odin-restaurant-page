export const loadAbout = () => {
    const divContent = document.querySelector('#content');

    const h1Name = document.createElement('h1');
    h1Name.textContent = 'About Us';

    const divText = document.createElement('div');
    divText.classList = "divText";

    const pContent = document.createElement('p');
    pContent.textContent = 'We are a fake restaurant that has a project page being built for us!! Like and Subscribe!';
    divText.appendChild(pContent);

    divContent.appendChild(h1Name);
    divContent.appendChild(divText);
}