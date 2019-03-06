import { Document, Model, model, Schema } from 'mongoose'

import { IUser } from '../interfaces'

import { schemaNames } from '../config'

export interface IUserModel extends IUser, Document {
}

export const UserSchema: Schema = new Schema({
  name: String,
})

export const User: Model<IUserModel> = model<IUserModel>(schemaNames.users, UserSchema)
