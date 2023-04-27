import { Optional, Model } from "sequelize";

interface IRoom {
  id: number;
  title: string;
}

interface RoomAttributes extends Optional<IRoom, "id"> {}
interface RoomInstance extends Model<IRoom, RoomAttributes> {}

export default RoomInstance;
