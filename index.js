const express = require("express");
const app = express();
var http = require('http').Server(app);
const regions = require('./app/DB_Models/regions.js');
app.set('view engine', 'pug');  
const query = require("./app/my_modules/query");


(function(){
  "use strict";

 app.get('/', function(req, res){
          var db = new query(regions);
          db.connect();
          db.mainPage(res);
  });
 app.get('/update', function(req, res){
          var db = new query(regions);
          db.connect();
          db.select(res);
  });


http.listen(3000, function(){
                console.log('СЕРВЕР ЗАПУЩЕН');
              });  
})();

