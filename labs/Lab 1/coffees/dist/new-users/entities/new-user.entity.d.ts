import mongoose from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    todos: mongoose.Types.ObjectId[];
    userName?: string;
    email?: string;
    age?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    todos: mongoose.Types.ObjectId[];
    userName?: string;
    email?: string;
    age?: number;
}>> & mongoose.FlatRecord<{
    todos: mongoose.Types.ObjectId[];
    userName?: string;
    email?: string;
    age?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
