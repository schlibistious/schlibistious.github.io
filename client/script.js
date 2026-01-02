let currentUrl = window.location.href;
let imageButtons = document.getElementsByClassName('link');
let images = [];

//gets parameters
function getParam(a) {
    let param = a.split("?id=")[1];
    return param;
}

//does the stuff
async function doTheStuff() {
    const data = await fetch('http://localhost:3000/data');
    const json = await data.json();
    images = json.Posts;
    console.log(images);

    //fallback
    if (images == null) {
        console.log("json is null. trying again...")
        doTheStuff()
    } else {
        setTimeout(() => {
            let currentImage = images.find(post => post.Id == getParam(currentUrl));
            document.getElementById('image_display').src = 'http://localhost:3000/' + currentImage.directory;
            document.getElementById('description').innerHTML = currentImage.description;
        }, 100);
    }


}


document.addEventListener('DOMContentLoaded', (event) => {
    doTheStuff();
});

