const nodemailer = require("nodemailer");

const sendEmail = async (to, text) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Matrimony CMS Password Reset",
    text,
  });
};

module.exports = sendEmail;