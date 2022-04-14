import User from "../models/User.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

//@des Register a new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { first, last, email, password, postcode } = req.body;
  // validation of fields
  if (!first || !last || !email || !password) {
    res.status(401).json({ msg: "please include all fields" });
  }

  const userExist = await User.findOne({ email });
  // check whether the user email exist.
  if (userExist) {
    res.status(401).json({ msg: "This email already exists." });
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
      success: true,
      result: {
        _id: user._id,
        name: user.name,
        email: user.email,
        postcode: user.postcode,
        is_admin: user.is_admin,
        is_owner: user.is_owner,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400).json({ msg: "invalid user data" });
  }
});

//@des Login for users
//@route /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validation of fields
  if (!email || !password) {
    res.status(400).json({ msg: "please include all fields" });
  }

  const user = await User.findOne({ email });
  //check if user and password mach
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      success: true,
      result: {
        _id: user._id,
        name: user.name,
        email: user.email,
        postcode: user.postcode,
        is_admin: user.is_admin,
        is_owner: user.is_owner,
        shop_id: user.shop_id,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(401).json({ msg: "Please check your email or password" });
  }
});

const getProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    res.status(401).json({ msg: "user does not exist" });
  }
  if (req.user._id.toString() === user._id.toString()) {
    res.status(200).json({
      success: true,
      result: user,
    });
  } else {
    res.status(400).json({ msg: "Not authorized" });
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  // check whether the user email exist.
  if (!user) {
    res.status(401).json({ msg: "This email does not exist." });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_RESET, {
    expiresIn: "20m",
  });
  const output = `
  <h2>Please Click On Given link to Reset Your Password</h2>
  <h3>The link will be expired within 20 minutes </h3>
  <a href="http://localhost:8080/resetpassword?token=${token}">Click to reset Password</a>
`;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "main-wesave@outlook.com", // generated ethereal user
      pass: "wesave-12345", // generated ethereal password
    },
  });
  const mailOptions = {
    from: "main-wesave@outlook.com", // sender address
    to: email, // list of receivers
    subject: "Forgot your Password", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };
  user.resetLink = token;
  await user.save();
  // send mail with link of reset password
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(401).json({ msg: "Not Work" });
    }
    res.status(201).json({ success: true, result: user });
  });
});

const reSettingPassword = asyncHandler(async (req, res) => {
  const { token } = req.query;
  const { password } = req.body;

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Verify token
  const decoded = jwt.verify(token, process.env.JWT_RESET);

  //Get User from token
  const user = await User.findById(decoded._id);
  if (user && user.resetLink.toString() === token) {
    user.password = hashedPassword;
    await user.save();
    res.json({ success: true });
  } else {
    res.status(401).json({ msg: "Not authorized" });
  }
  const output = `
  <h1>Your Password is Successfully Updated</h1>
`;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "main-wesave@outlook.com", // generated ethereal user
      pass: "wesave-12345", // generated ethereal password
    },
  });
  const mailOptions = {
    from: "main-wesave@outlook.com", // sender address
    to: user.email, // list of receivers
    subject: "Reset Password", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(401).json({ msg: "Not Work" });
    }
    res.status(201).json({ success: true, result: user });
  });
});
export {
  registerUser,
  loginUser,
  getProfile,
  forgotPassword,
  reSettingPassword,
};
