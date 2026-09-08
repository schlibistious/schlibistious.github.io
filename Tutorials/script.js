let tutorialList = [];

fetch('list.json')
  .then(response => response.json())
  .then(data => {
    tutorialList = data;
    search("");
  })
  .catch(err => console.error("Failed to load tutorial list:", err));

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
            newImg.src = tutorialList[j].directory + tutorialList[j].thumbnail;
            newImg.loading = "lazy";
            newImg.alt = tutorialList[j].alt;
            newImg.className = "Thumbnail"
            document.body.appendChild(newElement);

            let newLabel = document.createTextNode(tutorialList[j].name);
            newDiv.appendChild(newLabel);
        }
    }
}
