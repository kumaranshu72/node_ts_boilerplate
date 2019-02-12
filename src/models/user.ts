import { Document, Schema, Model, model} from 'mongoose';
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
}

export var UserSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String
});



export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);
