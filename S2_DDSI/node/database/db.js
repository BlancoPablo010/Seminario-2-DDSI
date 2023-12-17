import { Sequelize } from 'sequelize';

export const db = new Sequelize('database_app', 'root', '',{
    host:'localhost',
    dialect:'mysql'
});

