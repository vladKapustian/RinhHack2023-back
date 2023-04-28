import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";
import RoomInstance from "./room";
import User from "../user/user.model";
import Participants from "../participants/participants.model";

const Room = sequelize.define<RoomInstance>("Rooms", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  ticketId: {
    type: DataTypes.INTEGER,
  },
});

// Chat.hasOne(User);

export default Room;
