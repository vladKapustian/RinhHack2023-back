import { DataTypes } from "sequelize";
import sequelize from "..";
import UserInstance from "./userTypes";
import Ticket from "../tickets/ticket.model";

const User = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
