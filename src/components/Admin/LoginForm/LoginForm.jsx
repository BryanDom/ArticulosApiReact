import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify"
import { loginApi } from "../../../../api/user";
import { useAuth } from "../../../hooks";


export const LoginForm = () => {
  const {login} = useAuth();
    const formik = useFormik({
        // Valores iniciales del formulario
        initialValues: initialValues(),
        // aqui es para las validaciones de los campos
        validationSchema: Yup.object(validationSchema()),
        // aqui se ejecuta la funcion cuando se envia el formulario
        onSubmit: async (formData) => {
            try {
                // aqui se llama a la funcion de la API para loguear al usuario
                const response = await loginApi(formData);
                const {access} = response;

                login(access);
            } catch (error) {
                console.log(error);
                toast.error("Usuario o contraseña incorrectas");
            }
        },
    });


  return (
    <form className="pt-3" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <input
          name="email"
          type="email"
          className="form-control form-control-lg"
          placeholder="Correo electronico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
      </div>
      <br/>
      <div className="form-group">
        <input
          name="password"
          type="password"
          className="form-control form-control-lg"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </div>
      <div className="mt-3">
        <button
          type="submit"
          content="Iniciar Sesión"
          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
        >
          INGRESAR
        </button>
      </div>
      <div className="my-2 d-flex justify-content-between align-items-center">
        <div className="form-check">
          <label className="form-check-label text-muted">
            <input type="checkbox" className="form-check-input" />
            Keep me signed in
          </label>
        </div>
        <a href="#" className="auth-link text-black">
          Forgot password?
        </a>
      </div>
      <div className="mb-2">
        <button
          type="button"
          className="btn btn-block btn-facebook auth-form-btn"
        >
          <i className="ti-facebook me-2"></i>Connect using facebook
        </button>
      </div>
      <div className="text-center mt-4 fw-light">
        <p>¿No tienes cuenta?, crea una</p>
        <a className="text-primary">Admin</a>
        <a className="text-primary">Usuario</a>
      </div>
    </form>
  );
};

function initialValues() {
    return {
        email: "",
        password:"",
    }
}

function validationSchema(){
    return{
            // lo que hacemos es que el campo email es de tipo string y es obligatorio
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    }
}
