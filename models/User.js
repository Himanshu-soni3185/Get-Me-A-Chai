import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    }
  },
  {
    timestamps: true, // ✅ auto handles createdAt & updatedAt
  }
);

export default mongoose.models.User || model("User", UserSchema);