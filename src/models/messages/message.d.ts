import { Optional, Model } from "sequelize";

interface IMessage {
  id: number;
  text: string;
}

interface MessageAttributes extends Optional<IMessage, "id"> {}
interface MessageInstance extends Model<IMessage, MessageAttributes> {}

export default MessageInstance;
