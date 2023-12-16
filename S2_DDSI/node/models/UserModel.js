import { db } from '../database/db.js';
import { DataTypes } from 'sequelize';

export const UserModel = db.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    telefono: { type: DataTypes.INTEGER },
    correo: { type: DataTypes.STRING },
});

