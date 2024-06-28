import { Route, Routes } from "react-router-dom"
import { map } from "lodash"
import routes from "./routes"


export const Navigation = () => {

  console.log('routes -->', routes)
  return (
    <Routes>
      {/* aqui lo que hacemos es  */}
      {map(routes, (route, index) => (
        // aqui lo que hacemos es recorrer el array de rutas
        // y por cada ruta que encontremos
        // vamos a renderizar un componente Route
        // que tenga la propiedad path y element
        // el path va a ser el path de la ruta
        // y el element va a ser un componente de react
        // que va a ser el layout de la ruta
        // y dentro de ese layout vamos a renderizar el componente de la ruta
        // de esta manera podemos tener un layout general
        <Route 
          key={index} 
          path= {route.path}
          element={
            <route.layout>
              <route.component />
            </route.layout>
          } 
        />
      ))}
            {/* <Route path="/" element={<h1>Hola</h1>} /> */}
    </Routes>
  )
}
