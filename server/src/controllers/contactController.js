import Basket from "../models/Basket.js";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

const contactEmail = (req, res) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Name: ${req.body.fullName}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
`;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_ADDRESS, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: process.env.EMAIL_ADDRESS, // sender address
    to: process.env.EMAIL_ADDRESS, // list of receivers
    subject: "Customer Message", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(401).json({ msg: "Not Work" });
    }
    res.status(201).json({ success: true, result: "success" });
  });
};

const confirmationEmail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const basket = await Basket.findById(id).populate("shop_id", [
    "name",
    "address",
  ]);

  if (!basket) {
    res.status(400).json({ msg: "Basket not found" });
  }

  const output = `
  <h1>Basket Name: ${basket.name}</h1>
  <h3>Shop Address: ${basket.shop_id.address.street} ${basket.shop_id.address.house}</h3>
  <h3>Pick Up Time: From:${basket.pickup.from}, to:${basket.pickup.to}</h3>
  <h3>Your Code Is : ${req.body.code} </h3>
`;

  // console.log(`user email : ${req.user}`);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_ADDRESS, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: process.env.EMAIL_ADDRESS, // sender address
    to: req.user.email, // list of receivers
    subject: "WeSave Confirmation Message", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(401).json({ msg: "Not Work" });
    }
    res.status(201).json({ success: true, result: "success" });
  });
});

export { contactEmail, confirmationEmail };
