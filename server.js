const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded ({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//HTML requests
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
    });
  
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));    
    });


// API requests

//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    res.json(data);
  });
  
//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {
    data.push(req.body);
    res.json(true);
  });
  
app.listen(PORT, function() {
    console.log("App listening on PORT ", PORT);
  });