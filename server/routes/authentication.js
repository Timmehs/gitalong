const passport = require("passport");
var express = require("express");
var authRouter = express.Router();

// Route to trigger Github authentication
authRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// Github authentication callback route (once authenticated on GH side)
authRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  function(req, res) {
    res.redirect("/");
  }
);

authRouter.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = authRouter;
