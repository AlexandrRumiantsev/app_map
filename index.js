/***
const mongoose = require("mongoose");
const express = require("express");
const app = express();
  var http = require('http').Server(app);
app.set('view engine', 'pug');  

//app.set('view engine', 'jade');

var expressVue = require("express-vue");
const expressVueMiddleware = expressVue.init();

const regions = require('./MyModels/regions.js');
//Подключение модуля из своей библиотеки
const query = require("./my_module/query");

//Вызов  функции из модуля 
var db = new query(regions);
db.connect();





  app.get('/render', function(req, res){
      var z = new query();
      console.log(z.goodbye());
  });
   app.get('/', function(req, res){
            //db.select(res);
            var z = new query();
              z.test(res);

  });
    app.get('/api', function(req, res){
      //var z = new query();
              //z.test(res);
            db.select(res);
  });


http.listen(3000, function(){
                console.log('СЕРВЕР ЗАПУЩЕН');
              });  
***/
const express = require("express");
const app = express();
var http = require('http').Server(app);
const regions = require('./app/DB_Models/regions.js');
app.set('view engine', 'pug');  
//Подключение модуля из своей библиотеки
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

