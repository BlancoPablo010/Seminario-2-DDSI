import { Sequelize } from 'sequelize';

export const db = new Sequelize('database_app', 'root', '0508',{
    host:'localhost',
    dialect:'mysql'
});

