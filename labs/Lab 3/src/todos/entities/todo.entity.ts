import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop()
  name: string;

  @Prop()
  isImportant: boolean;

  @Prop()
  duration: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Schema.Types.ObjectId;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
