import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database"

export interface UserProps extends Model {
  email: string;
  password: string;
}

export const User = sequelize.define<UserProps>("User", {
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  full_name: {
    type: DataTypes.STRING,
  },
  profile: {
    type: DataTypes.STRING,
  },
  max_value: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: true,
  underscored: true,
  tableName: "users",
})