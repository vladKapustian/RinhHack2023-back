import { Optional, Model } from "sequelize";

interface IParticipants {
  id: number;
  roomId:number
}

interface ParticipantsAttributes extends Optional<IParticipants, "id"> {}
interface ParticipantsInstance extends Model<IParticipants, ParticipantsAttributes> {}

export default ParticipantsInstance;
