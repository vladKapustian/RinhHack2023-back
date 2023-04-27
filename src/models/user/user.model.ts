import { Model, Optional } from "sequelize";
import sequelize from "..";

interface IUser {
  id: number;
  username: string;
  password: string;
}

interface UserAttributes extends Optional<IUser, "id"> {}
interface UserInstance extends Model<IUser, UserAttributes> {}

const User = sequelize.define<UserInstance>("User", {});
