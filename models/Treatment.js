const mongoose = require('mongoose');
const { Schema } = mongoose;

const treatmentSchema = new Schema ({
  create_at: Date,
  clientSign: String,
  userSign: String,
  _service: {type: Schema.Types.ObjectId, ref: 'Service' }
});

module.exports = treatmentSchema;
