const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema ({
  title: String,
 
});

module.exports = serviceSchema;
