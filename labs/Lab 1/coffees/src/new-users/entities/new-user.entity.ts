import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    userName: String,
    age: Number,
    email: String,
    todos :[{type :  mongoose.Schema.Types.ObjectId, ref : 'Todo'}],
}) 
