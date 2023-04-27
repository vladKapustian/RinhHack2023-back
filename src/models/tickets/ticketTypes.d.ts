import { Model, Optional } from "sequelize";

export enum Priority {
  "Low",
  "Medium",
  "High",
  "Ulta high",
  "Closed",
}

interface ITicket {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  //   user_id: number;
}

interface TicketAttributes extends Optional<ITicket, "id"> {}
interface TicketInstance extends Model<ITicket, TicketAttributes> {}

export default TicketInstance;
