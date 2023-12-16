import express from 'express';
import cors from 'cors';
import { db } from './database/db.js';
import { userRoutes } from './routes/routes.js';

const app = express(); 

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

try {
    await db.authenticate();
    console.log('Conexión establecida correctamente.');
} catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
}

/*
app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});
*/


app.listen(8000, ()=> {
    console.log('Servidor corriendo en http://localhost:8000/');
})