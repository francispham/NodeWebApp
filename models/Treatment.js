const mongoose = require('mongoose');
const { Schema } = mongoose;

const treatmentSchema = new Schema ({
  create_at: Date,
  clientSign: String,
  aestheticianSign: string
});

module.exports = treatmentSchema;
