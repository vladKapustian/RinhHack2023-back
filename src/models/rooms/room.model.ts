import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";
import RoomInstance, { IRoom } from "./room";
import User from "../user/user.model";
import Participants from "../participants/participants.model";

const Room = sequelize.define<Model<IRoom>>("Rooms", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  ticketId: {
    type: DataTypes.INTEGER,
    references: { model: "Ticket", key: "id" },
  },
});

// Chat.hasOne(User);

export default Room;
