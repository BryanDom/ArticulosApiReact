import {LoginAdmin} from "../../pages/Admin"
import { useAuth } from "../../hooks";
import { TopMenu, SideMenu } from "../../components/Admin";


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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <TopMenu />
          </div>
        </div>
        <div className="row">
          <div className="col-2 bg-light">
            <SideMenu>{children}</SideMenu>
          </div>
        </div>
      </div>
    );
  };
