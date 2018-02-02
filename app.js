var express = require("express");
var app = express();

// app.get("/", (req, res) => {
//     res.end("hello")
// });

app.get("/", (req, res) => {
    res.send("hello")
});









app.use( express.static('public'));

var port = 3000;
app.listen(port, function() {
    console.log("http://localhost:"+port);
})