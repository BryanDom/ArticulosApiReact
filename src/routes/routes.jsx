import routesClient from "./routes.client";
import routesAdmin from "./routes.admin";
import {Error404} from "../pages"
import {BasicLayout} from "../layouts"


// de esta manera obtenemos un array con todas las rutas
// tanto las de admin como las del cliente
// para poder usarlas en el componente Navigation
// que se encuentra en App.jsx
const routes = [...routesAdmin, ...routesClient, {
     path: "*", 
     layout: BasicLayout, 
     component: Error404 
}];

export default routes;