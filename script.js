const fishgif = document.getElementById("fishgif")
setInterval(() => {
    if(fishgif.getAttribute("src") == "img/fishgif/1.jpg"){
        fishgif.src = "img/fishgif/2.jpg"
    }else if(fishgif.getAttribute("src") == "img/fishgif/2.jpg"){
        fishgif.src = "img/fishgif/3.jpg"
    }else{
        fishgif.src = "img/fishgif/1.jpg"
    }
}, 1000);