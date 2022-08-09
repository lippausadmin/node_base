import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database"

export interface UserProps extends Model {
  email: string;
  password: string;
}

export const User = sequelize.define<UserProps>("Nfe", {
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
  underscored: true,
  tableName: "nfes",
})