const movieModel = require("../models/movieSchema");

const home = async (req, res) => {
  try {
    let data = await movieModel.find({});
    return res.render("home", { data });
  } catch (error) {
    console.log(error);
    return false;
  }
};

const add_movie = async (req, res) => {
    return res.render("addMovie");
  };

const insertData = async (req, res) => {
  const { title,  date, rating, des, img } = req.body;
  console.log({ title, date, rating,  des, img });

  try {
    await movieModel.create({
      title,
      date,
      rating,
      des,
      img,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.send("Unable to saved data from input");
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await movieModel.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.send("Issue in deleting the data");
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let data = await movieModel.findById(id);
    console.log(data);
    res.render("editmovie", { movie: data });
  } catch (error) {
    console.log(error);
    return res.send("Error in fetching movie data");
  }
};

const updateData = async (req, res) => {
  console.log(req.body);
  const { title, date, rating,  des, img, id } = req.body;
  try {
    await movieModel.findByIdAndUpdate(id, {
      title: title,
      date: date,
      rating: rating,
      des: des,
      img: img,
    });

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating data");
  }
};

module.exports = { home, add_movie, insertData, deleteData, edit, updateData };