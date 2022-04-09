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
    service: "gmail",
    auth: {
      user: "Info.WeSave2022@gmail.com", // generated ethereal user
      pass: "wesave-12345", // generated ethereal password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "Info.WeSave2022@gmail.com", // sender address
    to: "george95.2621@gmail.com", // list of receivers
    subject: "My Resume Contact Request", // Subject line
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

export { contactEmail };
