import {useContext} from 'react'
import { AuthContext } from '../context'

// lo que ahce esto es que me devuelve el contexto de AuthContext
export const useAuth = () => useContext(AuthContext);