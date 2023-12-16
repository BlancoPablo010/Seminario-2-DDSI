import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/users/'

const CompEditUser = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre: nombre,
            telefono: telefono,
            correo: correo
        })
        navigate('/')
    }

    useEffect( ()=>{
        getUserid()
    })

    const getUserid = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setTelefono(res.data.telefono)
        setCorreo(res.data.correo)
    }

    return (
        <div>
            <h3>Editar Usuario</h3>
            <form onSubmit={update}>
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
                <button type="submit" className='btn btn-primary'>Confirmar</button>
            </form>
        </div>
    )
}

export default CompEditUser