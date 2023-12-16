import { UserModel } from '../models/AppModel.js';

//Devolver todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
};

//Devolver un usuario por id
export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where:{ id:req.params.id }
        });
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
};

//Crear un usuario
export const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json({
            "message": "Usuario creado exitosamente"
        });
    } catch (error) {
        res.json({ message: error });
    }
};

//Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Usuario eliminado exitosamente"
        });
    } catch (error) {
        res.json({ message: error });
    }
};