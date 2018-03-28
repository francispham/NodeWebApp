const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema ({
  serviceName: String,
  formDetails: {},
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = serviceSchema;
