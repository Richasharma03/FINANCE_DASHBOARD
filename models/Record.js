const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  amount: Number,
  type: {
    type: String,
    enum: ["income", "expense"]
  },
  category: String,
  date: {
    type: Date,
    default: Date.now
  },
  notes: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

 isDeleted: {
type: Boolean,
default: false
}
});


module.exports = mongoose.model("Record", recordSchema);