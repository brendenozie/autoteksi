import express from "express";
import { login, register } from "../controllers/auth.js";
import passport from "passport"
// import keys from "../config/keys.js"
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", register)

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user
      //   cookies: req.cookies
    });
  }else{
    res.status(200).json({
      success: true,
      message: "successfull",
      user: {name:"tim jones"}
      //   cookies: req.cookies
    });
  }
});

router.post("/login", login)
// router.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });



// google routes
router.get(  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    console.log()
    const token = jwt.sign(
      { id: req.user._id, isAdmin: req.user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = req.user._doc;
    // res
    //   .cookie("access_token", token, {
    //     httpOnly: true,
    //   })
    //   .status(200)
    //   .json({ details: { ...otherDetails }, isAdmin });
    res.redirect('/');
  }
);

// facebook routes
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    console.log("i am in fb callback");
    // Successful authentication, redirect home.
    res.redirect("/profile");
  }
);



export default router