import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import vehiclesRoute from "./routes/vehicles.js";
import makesRoute from "./routes/makes.js";
import modelsRoute from "./routes/models.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import cookieSession from "cookie-session"
import "./config/keys.js";
import passport from "passport";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3900",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//middlewares
// const corsOptions ={
//   origin:'http://localhost:3900', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
// app.use(cors())
app.use(cookieParser())
app.use(express.json());

import "./models/User.js" // Note model must be imported before passport
import ("./services/passport.js");


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


/* ================ Creating Cookie Key and link with Passport JS: Start ================  */
// app.use(
//   cookieSession({
//     maxAge: 30 * 86400 * 1000, // expire in 30 days(milli seconds)
//     keys: [keys.cookieKey]
//   })
// );

app.use(passport.initialize());
app.use(passport.session());
/* ================ Creating Cookie Key and link with Passport JS: End ================  */


app.use("/api/auth", authRoute);
app.use("/api/getusers", usersRoute);
app.use("/api/vehicles", vehiclesRoute);
app.use("/api/makes", makesRoute);
app.use("/api/models", modelsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
