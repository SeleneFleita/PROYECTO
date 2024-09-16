import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_name", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
