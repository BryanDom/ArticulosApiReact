import {LoginAdmin} from "../../pages/Admin"
import { useAuth } from "../../hooks";


export const AdminLayout = (props) => {
    const {children} = props;
    // aqui desestructuro la funcion auth del hook useAuth para saber si el usuario esta logueado
    // o no 
    const {auth} = useAuth();
    // cuando el auth es null significa que el usuario no esta loegueado
    
    // si el usuario no esta logueado lo redirigimos a la pagina de login
    if (!auth) return  < LoginAdmin />;

    // si esta logeado ahora ejecuta eso
  return (
    (<div>
        <p>AdminLayout</p>{children}
    </div>)
  )
}
