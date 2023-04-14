const jwt = require("jsonwebtoken");
const config = require("../config");

const auth = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, config.jwt);
    req.user = user;
    next();
  } catch (e) {
    res.clearCookie("token");
    return res
      .status(401)
      .send("Unauthenticated token. Please login to proceed");
  }
};

module.exports = auth;