import { AdminLayout } from "../layouts"
import { HomeAdmin, UsersAdmin } from "../pages/Admin"

const routesAdmin = [
    {
        // Ruta para el login de administrador
        // el layout es para el admin y el componente es el login
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin
    },
    {
        // Ruta para la pagina de usuarios
        // el layout es para el admin y el componente es el UsersAdmin
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin
    }

]

export default routesAdmin;