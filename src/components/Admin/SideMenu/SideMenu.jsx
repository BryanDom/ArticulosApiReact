import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export const SideMenu = ({ children }) => {
  return (
    <div className="d-flex">
      <SideMenuLeft />
      <div className="main-content flex-grow-1 p-5" style={{ marginLeft: '250px', backgroundColor: '#f8f9fa' }}>
        {children}
      </div>
    </div>
  );
};

const SideMenuLeft = () => {
  return (
    <Menu fixed='left' borderless className="side-menu vertical bg-dark text-white" style={{ width: '250px', overflow: 'hidden', paddingTop: '6em', zIndex: 99 }}>
      <Menu.Item className="text-white">
        <Icon name="home" className="mr-2" /> Articulos
      </Menu.Item>
      <Menu.Item className="text-white">
        <Icon name="user" className="mr-2" /> Usuarios
      </Menu.Item>
      <Menu.Item className="text-white">
        <Icon name="settings" className="mr-2" /> Configuración
      </Menu.Item>
    </Menu>
  );
};