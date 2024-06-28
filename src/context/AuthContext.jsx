import React, { useState, useEffect,createContext} from 'react'
import {useUser} from '../hooks/useUser'
import {setToken, getToken, removeToken} from '../../api/token'

// Se crea el contexto
// para poder usarlo en cualquier parte de la aplicacion
// se crea un objeto con 3 propiedades
// auth: undefined
// login: () => null
// logout: () => null
// auth: undefined es para saber si el usuario esta autenticado o no
// login: () => null es para loguear al usuario
// logout: () => null es para desloguear al usuario
export const AuthContext =  createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
});

// lo desesctructuro de una vez ya que si no seria props y despues const {children} = props
export function AuthProvider({children}) { 
    // desestructuro la funcion getMe del hook useUser
    // para poder obtener los datos del usuario
    const [auth, setAuth] = useState(undefined)
    const {getMe} = useUser()

    useEffect(() => {
      (async () => {
        const token = getToken();
        // si token es diferente de null
        // entonces obtiene los datos del usuario
        // y los guarda en la variable response   
        if (token) {
          const response = await getMe(token)
        //   setea el token y los datos del usuario en el auth
          setAuth({token, response})
        //   si no hay token entonces setea el auth a null
        // esto porque el usuario no esta logueado o paso algo
        } else {
          setAuth(null)
        }
      })();
    }, [])
    

    const login = async (token) => {
        setToken(token)
        // lo segudno que haremos es obtener los datos del usuario con GET
        const response = await getMe(token)
        // va a tener el token del usuario y los datos del usuario
        setAuth({token, response})
    }

    // para logearnos solamente necesitamos el token del usuario y ponerlos en NULL
    const logout = () => {
        // primero verificamos si auth tiene contenido, si tiene significa que el usuario esta logueado
        if(auth){
            removeToken()
            setAuth(null)
        }
    }

    const valueContext = {
        auth,
        login,
        logout,
    };

    // significa que si auth es undefined entonces retorna null aun no se a procesado lo de arriba
    if (auth === undefined) return null;

    return(
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}