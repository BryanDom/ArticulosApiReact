import {BASE_API_URL } from '../utils/constants'

export async function loginApi(formValue) {
    try{ 
        // aqui se hace la peticion a la API para loguear al usuario con los datos del formulario de login
        // se envia el formulario de login en formato JSON y se espera la respuesta de la API en formato JSON
        const response = await fetch(`${BASE_API_URL}/api/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValue),
        });
        // se convierte la respuesta de la API a formato JSON
        const data = await response.json();

        // si la respuesta de la API es un error, se lanza una excepcion
        if (response.status >= 400) {
            throw new Error("Usuario o contraseña incorrectas");
        }
        // se retorna la respuesta de la API
        return data;
    } catch (error) {
        console.log('loginApi error', error);
        return null;
    }
}

export async function getMeApi(token){
    try{
        const url = `${BASE_API_URL}/api/auth/me/`;
        const params = {
            headers: {
                // asi es como se envia una petición autorizada
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    }catch (error){
        throw error;
    }
}