import auth from "../models/auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await auth.findOne({ email: email });
    if (existingUser) {
      return res.status(404).json({ message: "This email is already in use" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await new auth({ name, email, password: hashedPassword });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );
    const savedUser = await newUser.save();
    res.status(200).json({ result: savedUser, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await auth.findOne({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User doesn't Exist." });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
