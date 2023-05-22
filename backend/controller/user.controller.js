const model = require("../models");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const jwt = require("jsonwebtoken");

dotenv.config();

const signUp = (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  if (newUser.password === req.body.confirmPassword) {
    bcrypt.hash(newUser.password, 10, function (err, hash) {
      newUser.password = hash;
      model.users
        .create(newUser)
        .then((result) => {
          res.status(200).json({
            newUser,
            message: "User created successful!",
          });
        })
        .catch((err) => {
          res.status(500).json({ message: "Something went wrong", err: err });
        });
    });
  } else {
    res.status(401).json({
      message: "Password doesn't match",
    });
  }
};

//user login
const login = (req, res) => {
  model.users
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      const verify = jwt.sign(
        {
          user: user.name,
          id: user.id,
        },
        process.env.VERIFY_SEC,
        { expiresIn: "7d" },

        (err, token) => {
          res.status(200).json({
            messege: "Login succcessful!",
            token: token,
          });
          console.log(token);
        }
      );
    })
    .catch((error) => {
      res.status(500).json({
        messege: "Something went wrong!!",
        error,
      });
    });
};

module.exports = {
  signUp,
  login,
};
