import React from "react";

export default function User(props) {
  const { id, firstname, lastname, email, onDelete } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td><button onClick={() => onDelete()}>Del</button></td>
    </tr>
  );
}
