import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/users/'

const CompShowUser = () => {
    const [users, setUser] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])

    //procedimiento para mostrar todos los usuario
    const getUsers = async ()=>{
        const res = await axios.get(URI)
        setUser(res.data)
    }

    //procedimiento para eliminar un usuario
    const deleteUser = async (id)=>{
        await axios.delete(`${URI}${id}`)
        getUsers()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb2'>Crear</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (user) => (
                                <tr key={user.id}>
                                    <td>{user.nombre}</td>
                                    <td>{user.telefono}</td>
                                    <td>{user.correo}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={()=>deleteUser(user.id)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowUser