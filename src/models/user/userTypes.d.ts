import { Model, Optional } from "sequelize";

interface IUser {
  id: number;
  username: string;
  password: string;
}

interface UserAttributes extends Optional<IUser, "id"> {}
interface UserInstance extends Model<IUser, UserAttributes> {}

export default UserInstance;
