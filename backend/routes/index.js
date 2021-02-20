const userRoute = require("./users");
const contactRoute = require("./contacts");

const combineRoute = (app) => {
  app.use("/api/users", userRoute);
  app.use("/api/contacts", contactRoute);

  return app;
};

module.exports = combineRoute;
