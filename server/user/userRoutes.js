const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../database/models/user");
const config = require("../config");

//

router.post("/login", async (req, res) => {
  let user = await User.findOne({ userName: req.body.userName });
  if (user !== null && bcrypt.compareSync(req.body.pass, user.hashedPassword)) {
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      config.jwt,
      {
        expiresIn: "2h",
      }
    );
    res.status(200).send({ username: user.username, token: token });
  } else {
    res.status(500).send("GET FUCKED SIGN UP");
  }
});

router.post("/signup", async (req, res) => {
  // req.body = { username, email, hashedPass }
  let check = await User.findOne({ email: req.body.email });
  if (check == null) {
    let user = req.body;
    delete Object.assign(user, {
      hashedPassword: bcrypt.hashSync(user.pass, 10),
    })["pass"];
    let newUser = await User.create(user);
    res.status(201).send(newUser);
  } else {
    res.status(500).send("Error inserting user");
  }
});

module.exports = router;
