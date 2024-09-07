import mongoose from "mongoose";
export declare const todoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user: mongoose.Types.ObjectId[];
    todaoName?: string;
    duration?: number;
    isImportant?: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId[];
    todaoName?: string;
    duration?: number;
    isImportant?: boolean;
}>> & mongoose.FlatRecord<{
    user: mongoose.Types.ObjectId[];
    todaoName?: string;
    duration?: number;
    isImportant?: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
