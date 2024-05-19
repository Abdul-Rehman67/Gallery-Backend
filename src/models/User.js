const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  bio:{
    type: String,

  },
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
