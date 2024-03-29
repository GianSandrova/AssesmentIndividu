import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Tenan = db.define('Tenan', {
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
        type: DataTypes.STRING(15),
        allowNull: false,
    },
}, {
    tableName: 'Tenan',
    timestamps: false,
    freezeTableName: true
});

export default Tenan;

(async () => {
    await db.sync();
})();