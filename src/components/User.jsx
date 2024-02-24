import React, { useState } from "react";

function User(props) {
  console.log("Render User", props.user.id);

  const user = props.user;
  const onUpdateName = props.onUpdateName;

  const [newName, setNewName] = useState("");
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  function onUpdateNameClick() {
    onUpdateName(user.id, newName);
  }
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>
        <input type="text" value={newName} onChange={handleNameChange} />
        <button onClick={onUpdateNameClick}>Update</button>
      </td>
    </tr>
  );
}

export default React.memo(User);

// React.memo is an api that memoizes the component, once a component is memoized, it will not rerender unless its props are not changed
