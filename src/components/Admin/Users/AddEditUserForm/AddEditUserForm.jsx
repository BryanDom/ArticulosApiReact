import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useUser } from "../../../../hooks";

export const AddEditUserForm = (props) => {
  const { openCloseModal, onRefetch, user } = props;
  // nos traemos la funcion addUser del hook useUser
  const { addUser, updateUser } = useUser();

  const formik = useFormik({
    // aqui le pasamos el user, ¿para que? si tiene valor entonces se ponga en el formulario
    // lo datos del usuario que se quiere editar
    initialValues: initialValues(user),
    validationSchema: Yup.object(user ? updatedSchema() : newSchema()),
    onSubmit: async (values) => {
      // try catch para manejar los errores
      // si todo sale bien se ejecuta el toast.success
      // si hay un error se ejecuta el toast.error
      try {
        if (user) {
          // si el usuario existe, se le añade el id al objeto values
          await updateUser(user.id, values);
          toast.success("Usuario actualizado correctamente");
        } else {
          // se ejecuta la funcion addUser del hook useUser
          await addUser(values);
          toast.success("Usuario creado correctamente");
        }
        // se ejecuta la funcion onRefetch para que se vuelva a hacer la petición a la API
        onRefetch();
        // hay que cerrar el modal
        openCloseModal();
      } catch (error) {
        toast.error("Error al crear el usuario");
      }
    },
  });

  return (
    <Form className="p-3" onSubmit={formik.handleSubmit}>
      <Form.Field>
        <label>Nombre de usuario</label>
        <Form.Input
          placeholder="Nombre de usuario"
          name="username"
          {...formik.getFieldProps("username")}
          error={
            formik.touched.username && formik.errors.username
              ? { content: formik.errors.username, pointing: "below" }
              : null
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <Form.Input
          type="email"
          placeholder="Email"
          name="email"
          {...formik.getFieldProps("email")}
          error={
            formik.touched.email && formik.errors.email
              ? { content: formik.errors.email, pointing: "below" }
              : null
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Nombre</label>
        <Form.Input
          placeholder="Nombre"
          name="first_name"
          {...formik.getFieldProps("first_name")}
          error={
            formik.touched.first_name && formik.errors.first_name
              ? { content: formik.errors.first_name, pointing: "below" }
              : null
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Apellidos</label>
        <Form.Input
          placeholder="Apellidos"
          name="last_name"
          {...formik.getFieldProps("last_name")}
          error={
            formik.touched.last_name && formik.errors.last_name
              ? { content: formik.errors.last_name, pointing: "below" }
              : null
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Contraseña</label>
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          {...formik.getFieldProps("password")}
          error={
            formik.touched.password && formik.errors.password
              ? { content: formik.errors.password, pointing: "below" }
              : null
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Repetir Contraseña</label>
        <Form.Input
          type="password"
          placeholder="Repetir Contraseña"
          name="re_password"
          {...formik.getFieldProps("re_password")}
          error={
            formik.touched.re_password && formik.errors.re_password
              ? { content: formik.errors.re_password, pointing: "below" }
              : null
          }
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Usuario Activo"
          name="is_active"
          toggle
          checked={formik.values.is_active}
          onChange={(e, { checked }) =>
            formik.setFieldValue("is_active", checked)
          }
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="Usuario Administrador"
          name="is_staff"
          toggle
          checked={formik.values.is_staff}
          onChange={(e, { checked }) =>
            formik.setFieldValue("is_staff", checked)
          }
        />
      </Form.Field>
      <Button type="submit" className="ui primary button mt-2">
        {user ? "Actualizar" : "Crear"}
      </Button>
    </Form>
  );
};

// funcion para inicializar los valores del formulario
// en caso de que tenga un usuario como el parametro pasado, entonces se pone sus valores
function initialValues(user) {
  return {
    username: user?.username || "",
    email: user?.email || "",
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    password: "",
    re_password: "",
    is_active: user?.is_active ? true : false,
    is_staff: user?.is_staff ? true : false,
  };
}

function newSchema() {
  return {
    username: Yup.string().required("El nombre de usuario es obligatorio"),
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("El correo es obligatorio"),
    first_name: Yup.string().required("El nombre es obligatorio"),
    last_name: Yup.string().required("Los apellidos son obligatorios"),
    password: Yup.string().required("La contraseña es obligatoria"),
    re_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Repetir la contraseña es obligatorio"),
    is_active: Yup.bool().required("El usuario activo es obligatorio"),
  };
}

function updatedSchema() {
  return {
    username: Yup.string().required("El nombre de usuario es obligatorio"),
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("El correo es obligatorio"),
    first_name: Yup.string(),
    last_name: Yup.string(),
    password: Yup.string(),
    re_password: Yup.string(),
    is_active: Yup.bool().required("El usuario activo es obligatorio"),
  };
}
