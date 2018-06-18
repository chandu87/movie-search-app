const request = require('request');
const express = require('express');
const app = express();

app.get("/results",function(req, res){
    request("http://www.omdbapi.com/?apikey=thewdb&s=star",function(reqst, response, body){
        if(!reqst && response.statusCode == 200){
            const parsedData = JSON.parse(body);
            res.send(parsedData.Search[0].Title);
        }
    });

});
app.listen(3000, function(){
    console.log("Server started at 3000");
});


