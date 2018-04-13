const mongoose = require('mongoose');
const { Schema } = mongoose;
const TreatmentSchema = require('./Treatment');

const serviceSchema = new Schema ({
  formValues: {},
  // treatments: [TreatmentSchema],
  // _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _client: { type: Schema.Types.ObjectId, ref: 'Client' },
  create_at: Date
});

mongoose.model('services', serviceSchema )
