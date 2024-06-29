import {useState} from 'react'
import { getMeApi, getUserApi, addUsersApi,updatedUserApi, deleteUserApi } from '../../api/user'
import {useAuth} from "."

// controlar todas las peticiones http en un solo sitio, lugar donde se manejan todas las peticiones http
// se hace una funcion que se encargue de hacer las peticiones http
export const useUser = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);
  const {auth} = useAuth();

  const getMe = async (token) => {
    try {
        const response = await getMeApi(token)
        return response
    } catch (error) {
        throw error
    }
  };

  const getUsers = async (token) => {
    try {
      setLoading(true);
      // se hace la petición a la API para obtener los datos de los usuarios
      // cuando termine la petición, se almacena la respuesta en la variable response
      const response = await getUserApi(auth.token);
      // y el loading se pone en false
      setLoading(false);
      // seteamos los valores obtenidos en la variable users
      setUsers(response);
      return response
    } catch (error) {
      // paramos el loading
      setLoading(false);
      // si hay un error en la petición, se lanza una excepción
      setError(error)
    }
  };

  const addUser = async(data) => {
    try {
      setLoading(true);
      const response = await addUsersApi(data, auth.token)
      setLoading(false);
      return response
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  const updateUser = async(id, data) => {
    try {
      setLoading(true);
      const response = await updatedUserApi(id, data, auth.token)
      setLoading(false);
      return response
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  // metodo para eliminar un usuario
  const deleteUser = async(id) =>{
    try {
      setLoading(true);
      const response = await deleteUserApi(id, auth.token)
      setLoading(false);
      return response
    } catch (error) {
      setLoading(false);
      setError(error)
    }
  }

  return {
    loading,
    error,
    users,
    getMe,
    getUsers,
    addUser,
    updateUser,
    deleteUser
  };
}
