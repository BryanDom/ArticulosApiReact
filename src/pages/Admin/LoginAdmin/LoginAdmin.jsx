import { LoginForm } from "../../../components/Admin";

export const LoginAdmin = () => {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="" alt="logo" />
                </div>
                <h4>Bienvenido al sistema de articulos</h4>
                <h6 className="fw-light">Inicia sesión para continuar</h6>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
