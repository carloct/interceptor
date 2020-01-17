const express = require("express");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const { User } = require("../models/user");
const passport = require("../config/passport");
const jwtService = require("../services/jwt");

const router = express.Router();

router.post("/auth/signup", async (req, res, next) => {
  check("email", "Email not valid").isEmail();
  check("password", "Password must be at least 8 characters long").isLength({
    min: 8
  });
  check("confirmPassword", "Passwords do not match").equals(req.body.password);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors });
  }

  try {
    const emailInUse = await User.query()
      .where({ email: req.body.email })
      .first();

    console.log(emailInUse);

    if (emailInUse) {
      return res.status(422).json({ error: "Email already in use" });
    }

    const user = await User.query().insertAndFetch({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    });

    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.log(err);
        return res.status(422).json({ errors: err });
      }

      if (user) {
        console.log(user);
        const token = jwtService.create(user);
        return res.status(201).json({ jwt: token });
      }
    })(req, res);
  } catch (err) {
    console.log(err);
    return res.status(422).json({ err });
  }
});

module.exports = router;
