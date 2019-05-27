function query(regions) {
	const mongoose = require("mongoose");


  this.connect = function() {
  	const host = '79.170.167.30'; 
  	const password = 'common-password';
  	const db = 'parser';
  	const login = 'parserUser';
  	const port = '61106';
  	mongoose.connect('mongodb://' + login + ':' + password + '@' + host + ':' + port + '/' + db, {useNewUrlParser: true} , function(err,db){
        if(err){
         console.log(err);
       }else {
           console.log('Подключение с БД установлено');   
       }
    return 'Этап Подключения пройден';
  	});
}

this.mainPage = function(perem) {
    console.log('Главная страница');
    return perem.render('index');
     
}


this.select = function(res) {


               return regions.find({}, function(err,q){

               
                      const iconv = require("iconv-lite");
                      const axios = require("axios");
                      
                      const regionsClass = require('./RegionMassive.js');
                      regions = new regionsClass();
                      console.log(q);
                      var jsonArrReg = regions.create(q);
          
                      const dataSchema = mongoose.Schema({
                                                            _id: String,
                                                            page: String,
                                                            __v: String,
                                                            data: Array
                                                          });
                        
                        const count_region = 82;
                        for(var cound_r = 0; cound_r < count_region; cound_r ++){ 
                              if(cound_r == 82){
                                var fs = require('fs');
                                fs.appendFileSync("mc/qiwi-nn.js", `${JSON.stringify(jsonArr)},\n`, function(err) {

                                   if(err) {return console.log(err);}
                                    console.log("The file was saved!");
                                  }); 
                              }
                              const query_region = mongoose.model(jsonArrReg[cound_r], dataSchema);
                                   
                                      query_region.find({}, function(err,getoverhaulhouselistbyaoguids){
                                       

                                             var i = 1;
                                             var z = 1;
                                             for(var l = 0; l < i; l++){
                                                     if(typeof getoverhaulhouselistbyaoguids[l] == "undefined"){
                                                             console.log('asdasdasd');
                                                             
                                                             break;
                                                           }
                                                  for(n = 0; n < z; n++){
                                                          
                                                             if(typeof getoverhaulhouselistbyaoguids[l] == "undefined"){
                                                             console.log('asdasdasd');
                                                             getoverhaulhouselistbyaoguids[l] = 'asdasdsad';
                                                             break;
                                                           }

                                                                //Запрос  данных  широты и долготы по адресу

                                                                 const jsonAdressAndCountPeople = [];
                                                              
                                                                var language = "ru";
                                                                var city = "Алтайский край";
                                                                if(getoverhaulhouselistbyaoguids[l]['data'][n].address == "undefined"){
                                                                break; 
                                                                }
                                                                    var street = getoverhaulhouselistbyaoguids[l]['data'][n].address;
                                                                 
                                                               
                                                                var clearStreet =street.replace(/([а-яa-zё-]+).*?(\s|$)/gi, (r, s) => s.length <= 4 ? '' : r);
                                                                   var clearStreet = clearStreet.replace(",", "");
                                                                   var clearStreet = clearStreet.replace(".", "");

                                                                var format = "jsonv2";

                                                                //Данные и Запрос к OpenStreetMap
                                                                var cityCode = encodeURIComponent(city);
                                                                var streetCode = encodeURIComponent(clearStreet);
                                                                

                                                                var get = "https://nominatim.openstreetmap.org/search?q="+streetCode+"&format=json&polygon=1&addressdetails=1";
                                                               
                                                                global.countPeople = getoverhaulhouselistbyaoguids[l]['data'][n].totalPpl;
                                                                global.addr = getoverhaulhouselistbyaoguids[l]['data'][n].address;

                                                                            axios.get(get)
                                                                          .then(function (response) {
                                                                            
                                                                            var data = res.end(response.query);
                                                                            var countPeople = global.countPeople;
                                                                            var addr = global.addr;
                                                                            if(countPeople==null) countPeople = 'Неизвестно';
                                                                            var lat =  parseFloat(response["data"][0]['lat']);
                                                                            var lon =  parseFloat(response["data"][0]['lon']);
                                                                            var display_name =  addr + ". Число жителей в доме: " + countPeople;
                                                                             
                                                                            jsonArr = [];
                                                                            
                                                                            jsonArr.push(lat, lon, display_name); 
                                                                            
                                                                             var fs = require('fs');
                                                                                       fs.appendFileSync("app/leaflet/qiwi-nn.js", `${JSON.stringify(jsonArr)},\n`, function(err) {
                                                                                          if(err) {
                                                                                                   return console.log(err);
                                                                                                    }
                                                                                                     console.log("The file was saved!");
                                                                                                      }); 
                                                                                
                                                                                   
                                                                                
                                                                            
                                                            
                                                                          })
                                                                          .catch(function (error) {
                                                                            console.log('Ошибка axios');
                                                                            console.log(error);
                                                                          });
                                                           
                                                 }   
                                             
                                }
                                         
                                    });
                                    
                               
                                    }
                      

                      var q='test';
                       return res.render('index', { jsonArr : global.jsonArr }); 

                                                       }
                                                       ); 

  }
}

module.exports = query;