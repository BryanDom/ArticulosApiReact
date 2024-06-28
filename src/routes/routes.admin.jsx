import { AdminLayout } from "../layouts"
import { HomeAdmin } from "../pages/Admin"

const routesAdmin = [
    {
        // Ruta para el login de administrador
        // el layout es para el admin y el componente es el login
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin
    }

]

export default routesAdmin;