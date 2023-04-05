const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../database/models/user");

//

router.post("/login", async (req, res) => {
  console.log(req.body);
  let user = await User.findOne({ userName: req.body.userName });
  if (user !== null && bcrypt.compareSync(req.body.pass, user.hashedPassword)) {
    res.status(200).send(user);
  } else {
    console.log(user);
    console.log(bcrypt.compareSync(req.body.pass, user.hashedPassword));
    res.status(500).send("GET FUCKED SIGN UP");
  }
});

router.post("/signup", async (req, res) => {
  // req.body = { username, email, hashedPass }
  let check = await User.findOne({ email: req.body.email });
  console.log(req.body);
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
