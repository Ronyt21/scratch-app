const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ronitonwork24x7:ronit123@cluster0.uktb1lu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(function () {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
