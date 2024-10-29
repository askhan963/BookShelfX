import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
   
    password: {
      type: String,
      required: true,
    },
    role : {
        type: String,
        enum : ["admin", "user"],
        required: true
    }
  },
  {
    timestamps: true,
  }
);
userSchema.pre('save', async (next) => {
  if(!this.isModified('password')) return next();
  this.password = await  bcrypt.hash(this.password,10);
  next();
})
export default mongoose.model("User", userSchema);
