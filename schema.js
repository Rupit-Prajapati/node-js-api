const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema);
