import mongoose from "mongoose";

export const todoSchema = new mongoose.Schema({
    todaoName: String,
    duration: Number,
    isImportant: Boolean,
    user :[{type : mongoose.Schema.Types.ObjectId, ref : 'User'}],    
}) 
