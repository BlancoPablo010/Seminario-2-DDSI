import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/users/'

const CompAddUser = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, telefono: telefono, correo: correo})
        navigate('/')
    }
    
    return (
        <div>
            <h3>Añadir Usuario</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        value={telefono}
                        onChange={ (e)=> setTelefono(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input
                        value={correo}
                        onChange={ (e)=> setCorreo(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompAddUser