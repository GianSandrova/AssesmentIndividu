import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Kasir = db.sequelize.define(
  "kasir",
  {
    KodeKasir: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nama: {
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

export default Kasir;

(async () => {
  await db.sequelize.sync();
})();
