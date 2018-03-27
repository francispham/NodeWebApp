const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
  googleId: String,
  treatments: { type: Number, default: 0 },
  isEmployee: { type: Boolean, default: false }
});

mongoose.model('users', userSchema);
