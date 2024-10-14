const mongoose = require("mongoose");

module.exports.db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://janviraghvani6708:JANVI6708@cluster0.y0uze.mongodb.net/"
    );
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
