import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Barang = db.sequelize.define('Barang', {
    KodeBarang: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NamaBarang: {
      type: DataTypes.STRING,
    },
    Satuan: {
      type: DataTypes.STRING,
    },
    HargaSatuan: {
      type: DataTypes.INTEGER,
    },
    Stok: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
  );

export default Barang;

(async () => {
    await db.sequelize.sync();
  })();
