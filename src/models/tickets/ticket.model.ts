import { DataTypes } from "sequelize";
import sequelize from "..";
import TicketInstance from "./ticketTypes";
import Room from "../rooms/room.model";

const Ticket = sequelize.define<TicketInstance>("Ticket", {
  id: {
    type: DataTypes.NUMBER,
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
});

Ticket.hasOne(Room);
Room.belongsTo(Ticket);

export default Ticket;
