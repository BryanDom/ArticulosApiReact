import React from 'react'
import { getMeApi } from '../../api/user'

// controlar todas las peticiones http en un solo sitio, lugar donde se manejan todas las peticiones http
// se hace una funcion que se encargue de hacer las peticiones http
export const useUser = () => {
  const getMe = async (token) => {
    try {
        const response = await getMeApi(token)
        return response
    } catch (error) {
        throw error
    }
  };
  return {
    getMe
  };
}
