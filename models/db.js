const mongoose = require("mongoose");

module.exports = function () {
  const db =
    "mongodb+srv://adexoludare:N8WQGDa3JANHTOeG@backenddb.gspem51.mongodb.net/Node-API?retryWrites=true&w=majority";
  mongoose
    .connect(db)
    .then(() => {
      console.log("connection to MongoDB was successful");
    })
    .catch((err) => {
      console.log("Unable to connect", err);
    });
};
//const db ="mongodb://127.0.0.1:27017/Node-API"
