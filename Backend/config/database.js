//database.js

import { Sequelize } from "sequelize";

const db = new Sequelize('Assesment', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres', 
    logging: false,
});

export default db;