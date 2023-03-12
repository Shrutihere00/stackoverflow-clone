import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routes/users.js";
import QuestionRouter from "./routes/questions.js";
import AnswerRouter from "./routes/answers.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("This is a stack overflow clone api");
});
app.use("/user", UserRouter);
app.use("/question", QuestionRouter);
app.use("/answer", AnswerRouter);
const PORT = process.env.PORT || 3001;
const CONNECTION_URL = process.env.MONGO_URI;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
