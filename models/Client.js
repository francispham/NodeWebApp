const mongoose = require('mongoose');
const { Schema } = mongoose;
const ServiceSchema = require('./Service')

const clientSchema = new Schema ({
  marketing: String,
  name: String,
  email: String,
  password: String,
  phone: String,
  age: Number,
  address: String,
  postalCode: String,
  services: [ServiceSchema],
  create_at: Date
});

mongoose.model('clients', clientSchema);
