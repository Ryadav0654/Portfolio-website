const User = require("../models/user.js");
const indexPage = (req, res) => {
    res.render("./welcomePage/index.ejs");
  }

const aboutPage = (req, res) => {
    res.render("./welcomePage/about.ejs");
  }

const skillPage = (req, res) => {
    res.render("./welcomePage/skill.ejs");
  }

const projectPage = (req, res) => {
    res.render("./welcomePage/project.ejs");
  }

const contactFormRender = (req, res) => {
    res.render("./users/contact.ejs");
  }

const contact = async (req, res) => {
  try {

    const {name, mobileNumber, email, message} = req.body;
    const user = new User({name, mobileNumber, email, message}); 
    await user.save();
    res.render("./users/thanksMsg.ejs", {name});

  } catch (error) {
      console.log(error);
  }
    
  }
module.exports = {indexPage, aboutPage, skillPage, projectPage, contactFormRender, contact}