const request = require('request');
const express = require('express');
const app = express();
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("search");
});
app.get("/results",function(req, res){

    const movieName = req.query.searchName;
    request("http://www.omdbapi.com/?apikey=thewdb&s="+movieName,function(reqst, response, body){
        if(!reqst && response.statusCode == 200){
            const parsedData = JSON.parse(body);
            res.render("results", {data : parsedData});
        }
    });

});
app.listen(3000, function(){
    console.log("Server started at 3000");
});


