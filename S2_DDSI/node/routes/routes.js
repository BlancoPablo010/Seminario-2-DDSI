import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById } from '../controllers/AppController.js';

export const userRoutes = express.Router();

userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUserById);
userRoutes.post('/', createUser);
userRoutes.delete('/:id', deleteUser);

