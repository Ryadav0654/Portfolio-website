const express = require("express");
const router = express.Router();
const {indexPage, aboutPage, skillPage, projectPage, contactFormRender, contact} = require("../Controllers/ravindras.js");

router.get("/", indexPage);


router.get("/about", aboutPage);
  
router.get("/skill", skillPage);
  
router.get("/projects", projectPage);
  
router.get("/contact", contactFormRender);
  
router.post("/contact", contact);


module.exports = router;