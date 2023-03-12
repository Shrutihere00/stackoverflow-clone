import mongoose from "mongoose";
import user from "../models/auth.js";
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    const allUsersInDetail = [];
    allUsers.forEach((users) => {
      allUsersInDetail.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
      });
    });
    res.status(200).json(allUsersInDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable..");
  }
  try {
    const updatedProfile = await user.findByIdAndUpdate(
      _id,
      { $set: { name: name, about: about, tags: tags } },
      { new: true }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};
