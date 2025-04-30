const nodemailer = require("nodemailer");

const sendEmail = async (to, text) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "rithickroshans.22eee@kongu.edu",//process.env.EMAIL_USER,
      pass:"msipc2004", //process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "rithickroshans.22eee@kongu.edu",//process.env.EMAIL_USER,
    to,
    subject: "Matrimony CMS Password Reset",
    text,
  });
};

module.exports = sendEmail;