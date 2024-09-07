import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Todo } from 'src/todos/entities/todo.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  age: number;

  @Prop({ unique: true })
  email: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }] })
  todos: Todo[];

  @Prop()
  role: string;

  @Prop()
  password: string;

  @Prop()
  passwordConfirm: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
