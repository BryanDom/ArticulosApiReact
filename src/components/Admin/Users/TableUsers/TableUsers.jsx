import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

export const TableUsers = (props) => {
  const { users, editUser, onDeleteUser } = props;
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Apellidos</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Activo</Table.HeaderCell>
          <Table.HeaderCell>Staff</Table.HeaderCell>
          <Table.HeaderCell>Acciones</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {map(users, (user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.last_name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>
              {user.is_active ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>
            <Table.Cell>{user.is_staff ? <Icon name="check" /> : <Icon name="close" />}</Table.Cell>
            <Table.Cell>
              <Button icon onClick={() => editUser(user)}>
                <Icon name="pencil" />
              </Button>
              <Button icon negative onClick={() => onDeleteUser(user)}>
                <Icon name="trash" />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
