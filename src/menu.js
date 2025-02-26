export const loadMenu = () => {
    const divContent = document.querySelector('#content');

    const h1Name = document.createElement('h1');
    h1Name.textContent = 'Food Menu';

    const divText = document.createElement('div');
    divText.classList = 'divText';

    const ulMenu = document.createElement('ul');
    for (let i = 0; i < 5; i++){
        const liMenuItem = document.createElement('li');
        liMenuItem.textContent = `Food item ${i+1}`;
        ulMenu.appendChild(liMenuItem);
    }
    divText.appendChild(ulMenu);

    divContent.appendChild(h1Name);
    divContent.appendChild(divText);
}