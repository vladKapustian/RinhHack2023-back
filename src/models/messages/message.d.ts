import { Optional, Model } from "sequelize";

interface IMessage {
  id: number;
  text: string;
  roomId:number;
  userId:number
}

interface MessageAttributes extends Optional<IMessage, "id"> {}
interface MessageInstance extends Model<IMessage, MessageAttributes> {}

export default MessageInstance;
