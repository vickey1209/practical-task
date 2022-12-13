const express = require('express');
const app = express();
const path = require('path');

const bodyparser = require ("body-parser")

require("./db/conn.js");


const Register = require("./model/customer.js");

const port = process.env.port || 3000;


const urlencoded = require("body-parser/lib/types/urlencoded");


const static_path = path.join(__dirname, "../public/style.css");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index");
});

       


  app.post("/register", (req, res) => {
    const registerdata = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
        date_of_birth: req.body.birthday,
      
      });
      registerdata.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

  




app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });

