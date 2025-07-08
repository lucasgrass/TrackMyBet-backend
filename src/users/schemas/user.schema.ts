import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true})
export class User extends Document {
    @Prop({ required: true, unique:true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    secondName: string;

    // tags
}

export const UsersSchema = SchemaFactory.createForClass(User);