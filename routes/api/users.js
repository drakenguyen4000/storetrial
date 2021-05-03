const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  config = require("config"),
  jwt = require("jsonwebtoken"),
  User = require("../../models/User");

//Index Route
router.post("/users", (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({ name }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
      name,
      password,
    });
    //Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      //encrypt password using hash
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) =>
          jwt.sign(
            {
              id: user._id,
            },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  _id: user._id,
                  name: user.name,
                },
              });
            }
          )
        );
      });
    });
  });
});

module.exports = router;
