const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require("multer");

//sets up express
const app = express();

//VARIABLES!!!
let postName;
let postDesc;
let posts;
let rawName;






//recieve image and filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'client/img'));
    },
    //convert filename
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const rawName = req.body.post_name || "duck";
        const safe = rawName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        cb(null, safe + "-" + Date.now() + ext);
    }
});


const upload = multer({ storage });

//recieve and set inputs
app.post("/img", upload.fields([{name: 'post', maxCount: 1}, {name: 'post_name', maxCount: 1}, {name: 'post_desc', maxCount:1}]), (req, res) => {

      // Fix 1: Use req.files.post[0] for fields()
    const file = req.files.post[0];
    const storedFilename = file.filename;  // e.g. 'call_of_the_ducks-17123456789.jpg'
    const directory = "img/" + storedFilename;

    console.log('post requests from', req.url);
    console.log('upload successful!');

    postName = req.body.post_name;
    postDesc = req.body.post_desc;

    console.log(rawName, postName, postDesc); // rawName now matches filename base

    //writes data to table
    const newPost = {
        directory: directory,
        Id: Date.now(),
        name: postName,
        description: postDesc
    }


    //edit json data
    fs.readFile("data.json", (err, data) => {
        if (err) {
            console.log("attempt to read json failed! D:");
        }
        //translates
        posts = JSON.parse(data);
        console.log(posts)

        if (!Array.isArray(posts.Posts)) posts.Posts = [];
        posts.Posts.push(newPost);

        fs.writeFile("data.json", JSON.stringify(posts, null, 2), (err2) => {
            if (err2) {
                console.log("attempt to write json failed! D:", err2);
                return res.status(500).send("Error writing data");
            }
      
            console.log("Added post:", newPost);
            // Send success page AFTER JSON is saved
            res.sendFile('./client/image_submit/success.html', { root: __dirname });
        });
    });
}); 

//listen
app.listen(3000, () => {
    console.log('listening on port 3000!');
});
console.log("Hello World...")

//when asking for website
app.get("/", (req, res) => {
    console.log('requests from', req.url);
    res.sendFile('./client/index.html', { root: __dirname});
    //res.sendFile('./client/img/CallOfTheDucks.jpg', { root: __dirname});

});

//gives client files
app.use(express.static(path.join(__dirname, 'client')));




//when asking for data
app.get("/data", (req, res) => {
    //reads json
    fs.readFile("data.json", (err, data) => {
        if (err) {
            console.log("attempt to read json failed! D:");
        }
        //translates
        posts = JSON.parse(data);
        res.send(posts);
    });

    console.log('requests from', req.url);
    
});

