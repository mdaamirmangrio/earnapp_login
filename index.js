const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
const path = require("path");
const User = require("./models/schema.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
dotenv.config();

PORT = process.env.PORT || 3000;

main()
  .then((res) => {
    console.log("databse connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}





app.get("/", (req, res) => {
  res.render("index");
});

app.post("/formdata", async (req, res) => {
  const {fullName, mobile, cnic} = req.body;
  const UserData = new User({
    fullName: fullName,
    mobileNumber: mobile,
    cnic: cnic
  })
  await UserData.save();
    res.send("<h1>Your data submitted! we will email you shortly.</h1>")
})

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});