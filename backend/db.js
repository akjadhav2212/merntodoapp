const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://akjadhav2212:ksRO7acJLAuzzdox@cluster0.qhmsgk5.mongodb.net/testtodos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
