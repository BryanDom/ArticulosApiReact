import React, { useState } from 'react';
import { useAuth } from '../../hooks';

export const HomeAdmin = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Cambia el estado de abierto a cerrado y viceversa
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Articulos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Opciones</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
              <button className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown}>
              Usuario
              </button>
                {isOpen && (
        <ul className="dropdown-menu dropdown-menu-end show" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Perfil</a></li>
          <li><a className="dropdown-item" href="#">Configuración</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" onClick={logout}>Cerrar Sesión</a></li>
        </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="welcome-text">Bienvenido a la tienda <span className="text-black fw-bold"> </span></h1>
            <h3 className="welcome-sub-text"> Lo mejor en la moda del mercado </h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-9">
            {/* Aquí va el contenido principal */}
          </div>
          <div className="col-lg-3">
            {/* Aquí va el sidebar o contenido secundario */}
          </div>
        </div>
      </div>

      <footer className="footer mt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <span className="text-muted">Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash.</span>
            <span className="text-muted">Copyright © 2021. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
