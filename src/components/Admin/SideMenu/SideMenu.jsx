import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";

export const SideMenu = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="d-flex">
      <SideMenuLeft pathname={pathname} />
      <div
        className="main-content flex-grow-1 p-5"
        style={{ marginLeft: "250px", backgroundColor: "#f8f9fa" }}
      >
        {children}
      </div>
    </div>
  );
};

const SideMenuLeft = (props) => {
  const { pathname } = props;
  //   sacamos el auth del hook useAuth para restringir el acceso a las rutas
  const { auth } = useAuth();

  return (
    <Menu
      fixed="left"
      borderless
      className="side-menu vertical bg-dark text-white"
      style={{
        width: "250px",
        overflow: "hidden",
        paddingTop: "6em",
        zIndex: 99,
      }}
    >
      {/* nos hará viajar al home principal */}
      <Menu.Item
        as={Link}
        to="/admin"
        active={pathname === "/admin"}
        className={`text-white ${
          pathname === "/admin" ? "bg-primary text-white" : ""
        }`}
      >
        <Icon name="home" className="mr-2" /> Home
      </Menu.Item>

      {/* nos hará viajar al home principal */}
      <Menu.Item
        as={Link}
        to="/admin/articulos"
        active={pathname === "/admin/articulos"}
        className={`text-white ${
          pathname === "/admin/articulos" ? "bg-primary text-white" : ""
        }`}
      >
        <Icon name="archive" className="mr-2" /> Articulos
      </Menu.Item>

      {/* en el menu de user la restringimos si es staff y superuser */}
      {auth.response.is_superuser && (
        <Menu.Item
          as={Link}
          to="/admin/users"
          active={pathname === "/admin/users"}
          className={`text-white ${
            pathname === "/admin/users" ? "bg-primary text-white" : ""
          }`}
        >
          <Icon name="user" className="mr-2" /> Usuarios
        </Menu.Item>
      )}
    </Menu>
  );
};
