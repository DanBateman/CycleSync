const mongoose = require("mongoose");
const connect = () => {
  try {
    const options = {
      useNewUrlParser: true,
    };

    const connection = mongoose.connect(
      "mongodb://user:pass@127.0.0.1:1512/",
      options
    );
    if (connection)
      console.log("\x1b[32m%s\x1b[0m", "Database Connected Successfully...");
    return connection;
  } catch (err) {
    console.log("\x1b[31m%s\x1b[0m", "Error while connecting database\n");
    console.log(err);
  }
};
module.exports = connect;
