const User = require("../models/user.model");
const { generateToken } = require("../util/jwt");
const crypto = require("crypto");
const sendEmail = require("../util/sendSmail");

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
  
    const user = await User.create({ username, email, password });
    const token = generateToken(user);
  
    res.status(201).json({ user, token });
  };
  

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(user);
  res.json({ user, token });
};

exports.logout = (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
};

exports.verify = async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
    user.verified = true;
    await user.save();
    res.json({ message: "Email verified" });
  };
  
  exports.forgotPassword = async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
  
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();
  
    await sendEmail(user.email, `Reset your password: http://localhost:3000/reset-password/${resetToken}`);
    res.json({ message: "Reset email sent" });
  };
  
  exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });
    if (!user) return res.status(400).json({ message: "Invalid or expired token" });
  
    user.password = newPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();
  
    res.json({ message: "Password reset successful" });
  };
  