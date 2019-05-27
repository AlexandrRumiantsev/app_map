'use strict';

function RegionMassive() {
  this.create = function(datas) {
    const jsonArrReg = [];
    const count_region = 82;
    //Заполнение массива регионов
    for (var cound_r = 0; cound_r < count_region; ++ cound_r) {
        var reg_name = datas[cound_r]['regionName'];
        reg_name = reg_name.replace(/\s+/g, '');
        reg_name = reg_name.toLowerCase();
        reg_name = reg_name + '_getoverhaulhouselistbyaoguids';
        jsonArrReg.push( reg_name ); 
    }
   return jsonArrReg;
  }
}

module.exports = RegionMassive;