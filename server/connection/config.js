const { default: mongoose } = require("mongoose");
const DB = process.env.DB_URL;

const connection = () => {
  mongoose
    .connect(DB)
    .then(() => console.log("Connection Successful"))
    .catch((e) => console.log("Connection Failed", e));
};

module.exports = connection;
