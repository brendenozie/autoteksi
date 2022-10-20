import Passpkg from 'passport';
const { serializeUser, deserializeUser, use } = Passpkg;
import GoogleStrategy  from "passport-google-oauth20"
import FacebookStrategy from "passport-facebook";
import LocalStrategy from "passport-local";
// import pkg from "../config/keys.js";
// import Monpkg from 'mongoose';
// const { model } = Monpkg;
// const User = model("User"); // getting Schema
import User from "../models/User.js";

Passpkg.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

/* =================== Handeling Infinite run: Start =================== , FACEBOOK_APP_ID, FACEBOOK_APP_SECRET */
Passpkg.serializeUser((user, done) => {
  done(null, user.id);
});

Passpkg.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// For Google
Passpkg.use(
  new GoogleStrategy(
    {
      clientID: "411115223657-6b65gcumin3g3t6og1g9rnuvcc5sh17k.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      // profile has all google login data
      /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: START =========  */

      // check if user id already inserted
      await User.findOne({ email: profile._json.email }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          // new user case
          // insert new user id
          new User({
            username: profile.displayName,
            email: profile._json.email,
            phone: "254706448146",
            usertype: "admin",
            isOnline: "true",
            dateRegistered: Date.now(),
            ranking: 0,
            country: "Ke",
            img: profile._json.picture,
            city: "Nairobi",
            password: "$2a$10$lDb3pFqo919CFB0MLJ2zGeu/.jiDijflpFJuEWiN1sIqIrE2MK.QK",
            isAdmin: true,
          })
            .save()
            .then(user => {
              console.log(user)
              done(null, user);
            });
        }
      });
      /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: END =========  */
    }
  )
);

// For facebook
Passpkg.use(
  new FacebookStrategy(
    {
      clientID: "2183655625275997",
      clientSecret: "ba716e187750acf9eddaf74ba9fc37dc",
      callbackURL: "/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: START =========  */
      // check if user id already inserted
      User.findOne({ username: profile.username }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          // new user case
          // insert new user id
          new User({
            username: profile.displayName,
            email: profile._json.email,
            phone: "254706448146",
            usertype: "admin",
            isOnline: true,
            dateRegistered: Date.now(),
            ranking: 0,
            country: "Ke",
            img: profile._json.picture,
            city: "Nairobi",
            password: "",
            isAdmin: true,
          })
            .save()
            .then(user => {
              done(null, user);
            });
        }
      });
      /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: END =========  */
    }
  )
);
