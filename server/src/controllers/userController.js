import User from "../models/User.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";

//@des Register a new user
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, postcode } = req.body;
  // validation of fields
  if (!name || !email || !password) {
    res.status(400).json({ message: "please include all fields" });
  }
  const userExist = await User.findOne({ email });

  // check whether the user email exist.
  if (userExist) {
    res.status(401).json({ message: "member or user already exist" });
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // creating a user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    postcode,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).json({ message: "invalid user data" });
  }
});

export { registerUser };
