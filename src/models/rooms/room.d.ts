import { Optional, Model } from "sequelize";

export interface IRoom {
  id: number;
  title: string;
  ticketId:number
}

interface RoomAttributes extends Optional<IRoom, "id"> {}
interface RoomInstance extends Model<IRoom, RoomAttributes> {}

export default RoomInstance;
