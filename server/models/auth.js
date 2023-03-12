import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String, default: "" },
  tags: { type: [String] },
  joinedOn: { type: Date, default: Date.now },
});
export default mongoose.model("User", UserSchema);
