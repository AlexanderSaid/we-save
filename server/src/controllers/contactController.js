// import Basket from "../models/Basket.js";
import nodemailer from "nodemailer";

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
      user: "main-wesave@outlook.com", // generated ethereal user
      pass: "wesave-12345", // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "main-wesave@outlook.com", // sender address
    to: "main-wesave@outlook.com", // list of receivers
    subject: "Customer Message", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(401).json({ msg: "Not Work" });
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(201).json({ success: true, result: "success" });
  });
};

const confirmationEmail = (req, res) => {
  const output = `
  <h3>Your Code Is : <span> ${req.body.code} </span></h3>

`;

  // console.log(`user email : ${req.user}`);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "main-wesave@outlook.com", // generated ethereal user
      pass: "wesave-12345", // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "main-wesave@outlook.com", // sender address
    to: req.user.email, // list of receivers
    subject: "WeSave Confirmation Message", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(401).json({ msg: "Not Work" });
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(201).json({ success: true, result: "success" });
  });
};

export { contactEmail, confirmationEmail };
