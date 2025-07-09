import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true, select: false })
  password: string;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  secondName: string;

  // tags
}

export const UsersSchema = SchemaFactory.createForClass(User);
