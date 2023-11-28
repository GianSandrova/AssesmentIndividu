import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Tenan = db.sequelize.define(
  "tenan",
  {
    KodeTenan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NamaTenan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Tenan;

(async () => {
  await db.sequelize.sync();
})();
