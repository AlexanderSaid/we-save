import User from "../models/User.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//@des Register a new user
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { first, last, email, password, postcode } = req.body;
  // validation of fields
  if (!first || !last || !email || !password) {
    res.status(400);
    throw new Error("please include all fields");
  }

  const userExist = await User.findOne({ email });
  // check whether the user email exist.
  if (userExist) {
    res.status(401);
    throw new Error("user already exist");
  }
  const name = { first, last };

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
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      postcode: user.postcode,
      is_admin: user.is_admin,
      is_owner: user.is_owner,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@des Login for users
//@route /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validation of fields
  if (!email || !password) {
    res.status(400);
    throw new Error("please include all fields");
  }

  const user = await User.findOne({ email });
  //check if user and password mach
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      postcode: user.postcode,
      is_admin: user.is_admin,
      is_owner: user.is_owner,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

const getProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    res.status(401);
    throw new Error("user does not exist");
  }
  if (req.user._id.toString() === user._id.toString()) {
    res.status(200).json(user);
  } else {
    res.status(400);
    throw new Error("Not authorized");
  }
});
export { registerUser, loginUser, getProfile };
