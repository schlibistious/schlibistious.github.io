async function doStuff() {
    const data = await fetch('/data');
    const json = await data.json();
    console.log(json);
    const posts = json.Posts
    if (json == null) {
        console.log('fetch failed. Trying again.')
        doStuff()
    } else {
        for (let i = 0; i < posts.length; i ++) {
            const currentPost = posts[i];
            //makes and sets the item div
            const newDiv = document.createElement("div");
            const page = document.getElementById("page");
            page.appendChild(newDiv);
            newDiv.setAttribute('class', 'item');
            //makes the a (link) tag
            const newTag = document.createElement("a");
            newDiv.appendChild(newTag);
            newTag.setAttribute('href', '/image_view?id=' + currentPost.Id);
            newTag.setAttribute('class', 'link');
            newTag.setAttribute('id', currentPost.Id);
            //makes and sets image
            const newImage = document.createElement('img');
            newTag.appendChild(newImage);
            newImage.setAttribute('src', currentPost.directory);
            newImage.setAttribute('alt', currentPost.name);
            newImage.setAttribute('id', currentPost.Id);
            newImage.setAttribute('class', 'button');
            //creates and sets containerDiv inside of newTag
            const div2 = document.createElement('div');
            newTag.appendChild(div2);
            div2.setAttribute('class', 'container');
            //creates and sets title
            const newTitle = document.createElement('p');
            div2.appendChild(newTitle);
            newTitle.setAttribute('class', 'title');
            newTitle.textContent = currentPost.name;
        }
    }; //IM FINALLY DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONE
}
doStuff();