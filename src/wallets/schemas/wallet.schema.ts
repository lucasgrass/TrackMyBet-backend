import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/users/schemas/user.schema';
import { Currency } from 'src/common/enums/currency.enum';

@Schema()
export class WalletCost {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  amount: number; // cents

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: String })
  description: string;
}

export const WalletCostSchema = SchemaFactory.createForClass(WalletCost);

@Schema({ timestamps: true })
export class Wallet extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, enum: Currency })
  currency: Currency;

  @Prop({ type: Number, required: true })
  initialBalance: number; // cents

  @Prop({ type: Number })
  balance: number;

  @Prop({ type: Number, default: 0 })
  deposit: number; // cents

  @Prop({ type: Number, default: 0 })
  withdraw: number; // cents

  @Prop({ type: Number, default: 0 })
  roi: number; // e.g.: 50% = 50

  @Prop({ type: Number, default: 0 })
  numberOfBets: number;

  @Prop({ type: Number, default: 0 })
  numberOfWinningBets: number;

  @Prop({ type: Number, default: 0 })
  numberOfLostBets: number;

  @Prop({ type: Number, default: 0 })
  numberOfRefundBets: number;

  @Prop({ type: Number, default: 0 })
  numberOfOpenBets: number;

  @Prop({ type: Number, required: true, default: 0 })
  unitValue: number; // cents

  @Prop({ type: [WalletCostSchema], default: [] })
  costs: WalletCost[]; // cents

  @Prop({ type: Number, default: 0 })
  netResult: number; // cents

  @Prop({ type: Number, default: 0 })
  maxWinningStreak: number;

  @Prop({ type: Number, default: 0 })
  maxLosingStreak: number;

  @Prop({ type: Number, default: 0 })
  averageBetValue: number;

  @Prop({ type: Number, default: 0 })
  highestWinningOdd: number;
}

export const WalletsSchema = SchemaFactory.createForClass(Wallet);
