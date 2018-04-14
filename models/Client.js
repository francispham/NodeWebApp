const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema ({
  marketing: String,
  name: String,
  email: String,
  password: String,
  phone: String,
  age: Number,
  address: String,
  postalCode: String,
  create_at: Date,
  serviceForm: {},
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('clients', clientSchema);
