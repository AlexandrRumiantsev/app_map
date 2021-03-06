function query(regions) {
    const mongoose = require("mongoose");


    this.connect = function() {
        const host = '79.170.167.30';
        const password = 'common-password';
        const db = 'parser';
        const login = 'parserUser';
        const port = '61106';
        mongoose.connect('mongodb://' + login + ':' + password + '@' + host + ':' + port + '/' + db, {
            useNewUrlParser: true
        }, function(err, db) {
            if (err) {
                console.log(err);
            } else {
                console.log('Подключение с БД установлено');
            }
            return 'Этап Подключения пройден';
        });
    }

    this.mainPage = function(perem) {
        return perem.render('index');

    }


    this.select = function(res) {
        return regions.find({}, function(err, q) {
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
            for (var cound_r = 0; cound_r < count_region; cound_r++) {
                if (cound_r == 82) {
                    var fs = require('fs');
                    fs.appendFileSync("mc/qiwi-nn.js", `${JSON.stringify(jsonArr)},\n`, function(err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("The file was saved!");
                    });
                }
                const query_region = mongoose.model(jsonArrReg[cound_r], dataSchema);
                query_region.find({}, function(err, getoverhaulhouselistbyaoguids) {
                    var i = 1;
                    var z = 1;
                    for (var l = 0; l < i; l++) {
                        for (n = 0; n < z; n++) {
                            const jsonAdressAndCountPeople = [];
                            var language = "ru";
                            var city = "Алтайский край";
                            var street = getoverhaulhouselistbyaoguids[l]['data'][n].address;
                            var clearStreet = street.replace(/([а-яa-zё-]+).*?(\s|$)/gi, (r, s) => s.length <= 4 ? '' : r);
                            var clearStreet = clearStreet.replace(",", "");
                            var clearStreet = clearStreet.replace(".", "");
                            var format = "jsonv2";
                            var cityCode = encodeURIComponent(city);
                            var streetCode = encodeURIComponent(clearStreet);
                            var get = "https://nominatim.openstreetmap.org/search?q=" + streetCode + "&format=json&polygon=1&addressdetails=1";
                            global.countPeople = getoverhaulhouselistbyaoguids[l]['data'][n].totalPpl;
                            global.addr = getoverhaulhouselistbyaoguids[l]['data'][n].address;
                            const axios_class = require('./axios.js');
                            const axios = new axios_class();
                            axios.get(get, res);
                        }
                    }
                });
            }
            return res.render('index', {
                jsonArr: global.jsonArr
            });
        });
    }
}
module.exports = query;