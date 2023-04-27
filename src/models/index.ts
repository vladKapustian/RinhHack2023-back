import { Sequelize } from "sequelize";
import User from "./user/user.model";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

export default sequelize;
