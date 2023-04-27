import { Optional, Model } from "sequelize";

interface IParticipants {
  id: number;
}

interface ParticipantsAttributes extends Optional<IParticipants, "id"> {}
interface ParticipantsInstance extends Model<IParticipants, ParticipantsAttributes> {}

export default ParticipantsInstance;
