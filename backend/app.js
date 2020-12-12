if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const logger = require("morgan");
const passport = require("passport");
const cors = require("cors");

const combineRoute = require("./routes");
const { passportConfig, mongooseConfig } = require("./config");
const { FRONTEND_URI } = require("./config/keys");

const app = express();

// cors config domain
var corsOptions = {
  origin: FRONTEND_URI,
  optionsSuccessStatus: 200,
  method: ["GET", "PUT", "POST", "DELETE"],
};

// connectDB
mongooseConfig.connectDB();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// passport config
passportConfig(passport);

// init route
app.get("/", (req, res) => {
  res.send("Server is running...!");
});
combineRoute(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
