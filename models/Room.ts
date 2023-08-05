import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  status: String,
  _id: Number,
});

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
