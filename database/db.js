const mongoose = require("mongoose");

const connectTodb = () => {
  mongoose
    .connect(
      "mongodb+srv://jaobastos82:14336608@cluster0.vcrkn2s.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectTodb;
