export const loadHome = () => {
    const contentDiv = document.querySelector('#content');

    const h1Name = document.createElement('h1');
    h1Name.textContent = 'Restaurant Name';

    const pContent = document.createElement('p');
    pContent.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia eu purus per, netus laoreet mattis lacus consectetur. Sem nascetur sagittis fringilla dictum vulputate, rutrum quam. Suspendisse nisi commodo fusce efficitur in primis neque odio. Justo est nullam ut rutrum eget. Malesuada eget consequat hac nulla facilisi tellus lacus natoque nec. Curae viverra justo at iaculis dapibus dictum eleifend blandit pharetra. Tellus ut porttitor quis fringilla ullamcorper nulla sagittis. Eros montes pulvinar dui diam sem rutrum. Quam fusce adipiscing placerat in est consectetur; quisque ultrices.';

    contentDiv.appendChild(h1Name);
    contentDiv.appendChild(pContent);
}