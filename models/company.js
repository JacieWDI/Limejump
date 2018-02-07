const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {type: String },
  address: {type: String }
});

module.exports = mongoose.model('Company', companySchema);
