import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";
import Tenan from "./tenanModel.js";
import Kasir from "./kasirModel.js";

const Nota = db.sequelize.define(
  "nota",
  {
    KodeNota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    KodeTenan: {
      type: DataTypes.INTEGER,
      references: {
        model: Tenan,
        key: "KodeTenan",
      },
      allowNull: false,
    },
    KodeKasir: {
      type: DataTypes.INTEGER,
      references: {
        model: Kasir,
        key: "KodeKasir",
      },
      allowNull: false,
    },
    TglNota: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    JamNota: {
      type: DataTypes.DATE, // Ganti dengan DataTypes.DATE
      allowNull: false,
    },
    JumlahBelanja: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Diskon: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Nota;
