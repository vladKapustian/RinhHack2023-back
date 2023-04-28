import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";
import MessageInstance from "./message";
import User from "../user/user.model";
import Room from "../rooms/room.model";

const Message = sequelize.define<MessageInstance>("Message", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
  },
  roomId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Room",
      key: "Id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "Id",
    },
  },
});

// Message.hasOne(User, { foreignKey: "userId", sourceKey: "userId" });
// Message.hasOne(Room, { foreignKey: "roomId", sourceKey: "roomId" });

export default Message;
