import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";
import MessageInstance from "./message";
import User from "../user/user.model";
import Room from "../rooms/room.model";

const Message = sequelize.define<MessageInstance>("Message", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
  },
});

User.hasOne(Message);
Room.hasOne(Message);

export default Message;
