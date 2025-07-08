import mongoose, { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Wallet } from "src/wallets/schemas/wallet.schema";
import { Bookmaker } from "src/enums/bookmaker.enum";
import { Sport } from "src/enums/sport.enum";
import { BetStatus } from "src/enums/betStatus.enum";
import { BetType } from "src/enums/betType.enum";
import { Tipster } from "src/tipsters/schemas/tipsters.schemas";

@Schema({ timestamps: true})
export class Bet extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true })
    wallet: Wallet;

    @Prop({ type: Date, required: true })
    date: Date;

    // hora

    @Prop({ type: String, enum: Bookmaker })
    bookmaker: Bookmaker;

    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: Number, required: true})
    odd: number;

    @Prop({ type: String, enum: Sport, required: true })
    sports: Sport;

    @Prop({ type: Number, required: true })
    value: number;

    @Prop({ type: String, enum: BetStatus, required: true })
    betStatus: BetStatus;

    @Prop({ type: Boolean, default: false })
    isCashout: boolean;

    @Prop({ type: Number, default: 0 })
    cashoutValue: number;

    @Prop({ type: String, enum: BetType, default: BetType.SIMPLE})
    betType: BetType;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tipster' })
    tipster: Tipster;

    @Prop({ type: String })
    comments: String;
    
}

export const BetsSchema = SchemaFactory.createForClass(Bet);