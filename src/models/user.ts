import { Document, Model, model, Schema } from 'mongoose'
import { IUser } from '../interfaces/user'

export interface IUserModel extends IUser, Document {
}

export const UserSchema: Schema = new Schema({
  name: String,
})

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema)
