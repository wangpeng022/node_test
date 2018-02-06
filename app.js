var express = require("express");
var app = express();

// app.get("/", (req, res) => {
//     res.end("hello")
// });

app.get("/", function(req, res){
    res.sendfile(__dirname,"index.html")
});



app.use( express.static('public'));
app.use( express.static('pages'));

var port = 3000;
app.listen(port, function() {
    console.log("http://localhost:"+port);
})