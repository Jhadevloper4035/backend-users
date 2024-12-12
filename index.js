require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./lib/sequelize");
const userModel = require("./models/user");
const { where } = require("sequelize");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected And Sync ");
  })
  .catch((error) => {
    console.log("Uanble to connected to database", error);
  });

app.get("/users", async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch all users data " });
  }
});


app.get("/users/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await userModel.findOne({ where: { id } });
    if (!user) return res.status(404).json({ message: "User not Found" });
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch user  " });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
