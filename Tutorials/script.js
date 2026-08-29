let tutorialList = [
    {name:"Different ways to use a lemon", directory:"DifferentWaysToUseALemon/", alt:"lemon"}, 
    {name:"How to take a lemon off of your head", directory:"howToTakeALemonOffOfYourHead/", alt:"lemon"},
    {name:"How to Make a Website :D!!", directory:"howToMakeAWebsite/", alt:"car"}, //REMEMBER TO PUT A / AFTER THE NAME!!!!!!!!!!!!!!!!!
    {name:"How to Make a Lavacast", directory:"howToMakeALavacastInMinecraft/", alt:"minecraft lavacast"} //REMEMBER TO MAKE SURE THAT YOUR THUMBNAIL IS "Thumbnail.jpg" AND NOT "Thumbnail.png"
    // {name:"name", directory:"template", alt:"template"}
]

function search(q){
    let tutorials = document.getElementsByClassName("tutorial");

    while (tutorials.length > 0) {
        tutorials[0].remove();
    }

    for(let j=0; j < tutorialList.length; j++){
        if(tutorialList[j].name.toLowerCase().includes(q.toLowerCase())){
            let newElement = document.createElement("a");
            newElement.href = tutorialList[j].directory;

            let newDiv = document.createElement("div");
            newElement.appendChild(newDiv);
            newDiv.className = 'tutorial';

            let newImg = document.createElement("img");
            newDiv.appendChild(newImg);
            newImg.src = tutorialList[j].directory + "Thumbnail.jpg";
            newImg.alt = tutorialList[j].alt;
            newImg.className = "Thumbnail"
            document.body.appendChild(newElement);

            let newLabel = document.createTextNode(tutorialList[j].name);
            newDiv.appendChild(newLabel);
        }
    }
}
