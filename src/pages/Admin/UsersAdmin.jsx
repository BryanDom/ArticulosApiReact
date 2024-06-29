import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useUser } from "../../hooks";
import { toast } from "react-toastify";
import {
  HeaderPage,
  TableUsers,
  AddEditUserForm,
} from "../../components/Admin";
import { ModalBasic } from "../../components/Common";

export const UsersAdmin = () => {
  const { loading, users, getUsers, deleteUser } = useUser();

  const [titleModal, setTitleModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);

  // se ejecuta la función getUsers cuando se renderiza el componente
  useEffect(() => {
    getUsers();
  }, [refetch]);

  // si esto es true seteas false, caso contrario false - true
  const openCloseModal = () => setShowModal((prev) => !prev);

  // lo uncio que va hacer es cambiar el valor de refetch
  // esto para que se vuelva a ejecutar el useEffect
  // y asi se vuelva a hacer la petición a la API y recargar los datos y pagina
  const onRefetch = () => setRefetch(!refetch);

  const addUser = () => {
    setTitleModal("Crear Usuario");
    setContentModal(
      <AddEditUserForm openCloseModal={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const editUser = (user) => {
    setTitleModal("Editar Usuario");
    setContentModal(
      <AddEditUserForm
        user={user}
        openCloseModal={openCloseModal}
        onRefetch={onRefetch}
      />
    );
    openCloseModal();
  };

  const onDeleteUser = async (data) => {
    const result = window.confirm(
      `¿Estás seguro de eliminar el usuario ${data.email}?`
    );

    if (result) {
      try{
        await deleteUser(data.id)
        onRefetch();
        toast.error("Usuario eliminado correctamente");
      }catch (error){
        console.log('error', error)
      }
    }
  };

  return (
    <div>
      <HeaderPage
        title="Usuarios"
        btnTitle="Nuevo Usuario"
        btnClick={addUser}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando Usuarios
        </Loader>
      ) : (
        // para la tabla de users
        <TableUsers
          users={users}
          editUser={editUser}
          onDeleteUser={onDeleteUser}
        />
      )}
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </div>
  );
};
