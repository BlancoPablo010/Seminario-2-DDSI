import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'htpp://localhost:8000/users/';
const CompCreateUser = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        const formData = {
            nombre: nombre,
            telefono: telefono,
            correo: correo
        }
        await axios.post(URI, JSON.stringify(formData)).catch(function (err) {
            if(err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if(err.request) {
                console.log(err.request);
            } else {
                console.log('Error', err.message);
            }

        })
        navigate('/');
    }

    return(
        <div>
            <h1>Crear usuario</h1>

            <form onSubmit={ store }>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input 
                        value={nombre} 
                        type='text' 
                        className='form-control' 
                        onChange={ (e) => setNombre(e.target.value) } 
                        />
                    <label className='form-label'>Telefono</label>
                    <input 
                        value={telefono} 
                        type="text" 
                        className='form-control' 
                        onChange={ (e) => setTelefono(e.target.value) } 
                        maxLength="9"
                        />
                    <label className='form-label'>Correo</label>
                    <input 
                        value={correo} 
                        type='text' 
                        className='form-control' 
                        onChange={ (e) => setCorreo(e.target.value) } />
                    <button type='submit' className='btn btn-primary'>Crear</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateUser;