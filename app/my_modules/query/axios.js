'use strict';

function AxiosGet() {
  this.get = function(str, resurse) {
    const iconv = require("iconv-lite");
    const axios = require("axios");
    axios.get(str).then(function (response) {
                   var data = resurse.end(response.query);
                   var countPeople = global.countPeople;
                   var addr = global.addr;
           if(countPeople==null) countPeople = 'Неизвестно';
              var lat =  parseFloat(response["data"][0]['lat']);
              var lon =  parseFloat(response["data"][0]['lon']);
              var display_name =  addr + ". Число жителей в доме: " + countPeople;
              const jsonArr = [];
              jsonArr.push(lat, lon, display_name); 
              var fs = require('fs');
              fs.appendFileSync("app/leaflet/qiwi-nn.js", `${JSON.stringify(jsonArr)},\n`, function(err)
              {
                  if(err) { return console.log(err);}
                     console.log("The file was saved!");
               }
                                ); 
                                                                                
                                                                                   
                                                                                
                                                                            
                                                            
                                               }
                          ).catch(function (error) {
                                                    console.log('Ошибка axios');
                                                    console.log(error);
                                                    });
  }
}

module.exports = AxiosGet;