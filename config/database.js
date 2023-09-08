const mongoose = require("mongoose");

// Connection to mongodb.
mongoose.connect("mongodb+srv://SyedAli47:Codename47@cluster0.gpaa877.mongodb.net/EmployeeReviewSystem"); 


const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
