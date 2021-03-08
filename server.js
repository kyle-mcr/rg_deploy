const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});


app.listen(8000, () => console.log("listening on port 8000"));
