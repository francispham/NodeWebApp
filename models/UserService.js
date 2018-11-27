const mongoose = require('mongoose');
const { Schema } = mongoose;

const userServiceSchema = new Schema ({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _service: { type: Schema.Types.ObjectId, ref: 'Service' }
});

mongoose.model('userService', userServiceSchema);
