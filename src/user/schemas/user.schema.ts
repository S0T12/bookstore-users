import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: ['standard', 'premium'], default: 'standard' })
  membershipType: string;

  @Prop({
    required: true,
    enum: ['user', 'admin', 'superAdmin'],
    default: 'user',
  })
  role: string;

  @Prop({ optional: true, default: '' })
  assignedBy?: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
