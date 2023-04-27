import { DataTypes } from "sequelize";
import sequelize from "..";
import User from "../user/user.model";
import Room from "../rooms/room.model";

const Participants = sequelize.define("Participants", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

Participants.hasMany(User);
Room.hasOne(Participants);

export default Participants;
