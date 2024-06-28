import {ClientLayout} from "../layouts";
import {Home} from "../pages/Client";

const routesClient = [
    {
        // Ruta para el home del cliente
        // el layout es para el cliente y el componente es el home
        path: "/",
        layout: ClientLayout,
        component: Home,
    }
]

export default routesClient;