import mongoose, { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/schemas/user.schema";
import { Currency } from "src/enums/currency.enum";

@Schema({ timestamps: true})
export class Wallet extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    user: User

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, equired: true, enum: Currency })
    currency: Currency;

    @Prop({ type: Number, required: true })
    initialBalance: number;

    @Prop({ type: Number })
    balance: number;

    @Prop({ type: Number, default: 0 })
    deposit: number;

    @Prop({ type: Number, default: 0 })
    withdraw: number;

    @Prop({ type: Number, default: 0 })
    roi: number;

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
    
    @Prop({ type: Number, default: 0 })
    unitValue: number;

    @Prop({ type: Number, default: 0 })
    cost: number;

    @Prop({ type: Number, default: 0 })
    netResult: number;

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