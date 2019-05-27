var mongoose = require('mongoose');

const regionsSchema = mongoose.Schema({
          _id: String,
          regionName: String,
          aoguid: String
        });
module.exports = mongoose.model('regions', regionsSchema);