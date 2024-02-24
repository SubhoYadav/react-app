import React from "react";

import User from "./User.jsx";

export default function UserTable({ users, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return <User key={index} {...user} onDelete={() => onDelete(index)} />;
        })}
      </tbody>
    </table>
  );
}
