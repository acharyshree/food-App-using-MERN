const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt =require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecret="qwertyuiopasdfghjkzxcvbnm"


// createing a new user 
router.post('/CreatUser',
[
body('email').isEmail(),
body('name').isLength({min:5}),
body('password','Incorrect Password').isLength({min:5})
],
async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        });
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt);
  try {
    await User.create({
      name: req.body.name,
      password: secPassword,
      email: req.body.email,
      location: req.body.location
    })
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

// login a user 

router.post('/loginuser', [
  body('email').isEmail(),
  body('password', 'Incorrect Password').isLength({ min: 5 })
], async (req, res) => {
  const email = req.body.email;
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  try {
    let userData = await User.findOne({ email });

    if (!userData) {
      return res.status(400).json({ errors: "Email not found" });
    }
    const pwdCompare=await bcrypt.compare(req.body.password,userData.password)

    if (!pwdCompare) {
      return res.status(400).json({ errors: "Incorrect password" });
    }
    const data={
      user:{
        id:userData.id
      }
    }
  const authToken=jwt.sign(data,jwtSecret)
    return res.json({ success: true,authToken:authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }

 
});


router.get('/dummy',async(req,res)=>{
  res.status(200).json({message:"dummy is here"})
})



module.exports = router;
