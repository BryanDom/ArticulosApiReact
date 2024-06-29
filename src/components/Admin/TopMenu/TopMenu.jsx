import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import "bootstrap/dist/css/bootstrap.min.css";

export const TopMenu = () => {
  const { auth, logout } = useAuth();

//   aqui lo que se realiza es que si el usuario no tiene nombre y apellido
//   entonces se le asigna el email
//   si tiene nombre y apellido entonces se le asigna el nombre y apellido
  const renderName = () => {
    if (auth.response?.first_name && auth.response?.last_name) {
      return `${auth.response.first_name} ${auth.response.last_name}`;
    }
    return auth.response?.email;
  };

  return (
    <Menu fixed="top" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Menu.Item className="navbar-brand text-white">
        <p>Articulos Admin</p>
      </Menu.Item>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <Menu.Item as="li" className="nav-item">
            <span className="nav-link">Hola {renderName()}</span>
          </Menu.Item>
          <Menu.Item as="li" className="nav-item">
            <a className="nav-link" href="#home">
              <Icon name="home" />
            </a>
          </Menu.Item>
          <Menu.Item as="li" className="nav-item">
            <a className="nav-link" href="#user">
              <Icon name="user" />
            </a>
          </Menu.Item>
          <Menu.Item as="li" className="nav-item" onClick={logout}>
            <a className="nav-link" href="">
              <Icon name="sign-out" />
            </a>
          </Menu.Item>
        </ul>
      </div>
    </Menu>
  );
};
