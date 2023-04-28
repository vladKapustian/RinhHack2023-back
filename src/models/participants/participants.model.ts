import { DataTypes } from "sequelize";
import sequelize from "..";
import User from "../user/user.model";
import Room from "../rooms/room.model";
import ParticipantsInstance from "./participants";

const Participants = sequelize.define<ParticipantsInstance>("Participants", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  roomId: {
    type: DataTypes.INTEGER,
    references:{
        model:"Room",
        key: "id"
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    references:{
        model:"User",
        key: "id"
    }
  },
});

// Participants.hasMany(User, { sourceKey: "userId" });
// Room.hasOne(Participants, { foreignKey: "roomId", sourceKey: "roomId" });

export default Participants;
