if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const logger = require("morgan");
const passport = require("passport");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");

const combineRoute = require("./routes");
const rootSocket = require("./sockets");
const { passportConfig, mongooseConfig } = require("./config");
const { FRONTEND_URI } = require("./config/keys");

// config socketio
var server = http.createServer(app).listen(5005);
var io = socketIO(server, {
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
  cors: {
    origin: [FRONTEND_URI, "http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});
rootSocket(io);

// cors config domain
var corsOptions = {
  origin: [FRONTEND_URI, "http://localhost:3000"],
  credentials: true,
};

// connectDB
mongooseConfig.connectDB();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

// passport config
passportConfig(passport);

// init route
app.get("/", (req, res) => {
  res.send("Server is running...!");
});
combineRoute(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
