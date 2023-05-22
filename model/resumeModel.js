const mongoose = require("mongoose");
const resume = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  eamil: {
    type: String,
    required: true,
  },
  profileUrl: {
    type: URL,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Resume", resume);
// module.exports = Resume;
