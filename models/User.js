const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
  googleId: String,
  credits: { type: Number, default: 0 },
  isEmployee: { type: Bolean, default: false }
});

mongoose.model('users', userSchema);
