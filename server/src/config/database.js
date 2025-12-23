import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    dialect: process.env.POSTGRES_DIALECT || 'postgres',
    logging: false,
});

export {Sequelize, sequelize};