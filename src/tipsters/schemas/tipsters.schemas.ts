import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/users/schemas/user.schema';

@Schema({ timestamps: true })
export class Tipster extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, default: 0 })
  tipsterCost: number;
}

export const TipsterSchema = SchemaFactory.createForClass(Tipster);

TipsterSchema.index({ name: 1, owner: 1 }, { unique: true });
