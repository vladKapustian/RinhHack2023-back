import { DataTypes } from "sequelize";
import sequelize from "..";
import TicketInstance from "./ticketTypes";
import Room from "../rooms/room.model";

const Ticket = sequelize.define<TicketInstance>("Ticket", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM(...Object.values(["Low", "Medium", "High", "Ulta high", "Closed"])),
    allowNull: false,
  },
  roomId: {
    type: DataTypes.INTEGER,
    references: { model: "Room", key: "id" },
  },
});

// Ticket.hasOne(Room, { foreignKey: "roomId", sourceKey: "roomId" });
// Room.belongsTo(Ticket);

export default Ticket;
