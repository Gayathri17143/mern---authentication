import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, requird: true, unique: true },
  email: { type: String, requird: true, unique: true },
  password: { type: String, requird: true },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };
