// load up our shiny new route for users
const userRoutes = require("./cbr");

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get("/", (req, res) => {
    res.send("api-server");
  });
  // run our user route module here to complete the wire up
  //git checkout hh
  userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;