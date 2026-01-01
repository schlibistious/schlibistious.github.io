let currentUrl = window.location.href;
let imageButtons = document.getElementsByClassName('link');
let images = [
    {},
    {image: 'img/CallOfTheDucks.jpg', id: 1, description: 'THE CALL OF THE DUCKS RAAAAAAH SO SCARY!!! first image ever posted on schlibistious.'},
    {image: 'img/DucksDeploy.jpg', id: 2, description: 'the ducks deploy for war against the seagulls... who will win?'}
];

function getParam(a) {
    let param = a.split("?id=")[1];
    return param;
}

function doTheStuff() {
    let currentImage = images[getParam(currentUrl)]
    document.getElementById('image_display').src = currentImage.image;
    document.getElementById('description').innerHTML = currentImage.description;
}

document.addEventListener('DOMContentLoaded', (event) => {
    doTheStuff();
});
