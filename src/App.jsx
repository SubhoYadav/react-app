import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useMemo } from "react";
import UserList from "./components/UserList";
import { useCallback } from "react";
const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

// PROBLEM: On Toggling the visibility of the user table, the sum is calculated again and again even if the data remains same

/**
 useMemo => memoizes the value returned from the callback function
 useCallback => memoizes a callback function, often used togeather with React.memo, if we have passed a callback function to the memoized component as a prop.
 React.memo => memoizes a react component
 */

function App() {
  // const users = [
  //   {
  //     id: 1,
  //     name: "Subho Yadav"
  //   },
  //   {
  //     id: 2,
  //     name: "Virendra Patel"
  //   }
  // ]
  const [users, setUsers] = useState([]);
  const [showList, setToggleList] = useState(true);

  // const onUpdateName = (userId, newName) => {
  //   const newUsers = [...users];
  //   // The same reference to user objects are copied in the array newUsers so if we change the name of the user in the newUsers array and at the same time memoized the user component the change in the data is not reflected

  //   // const userToUpdate = newUsers.find((user) => user.id == userId);
  //   // // okay! find function returns the reference to the object in the array satisfying the condition
  //   // userToUpdate.name = newName;
  //   // setUsers(newUsers);

  //   const index = newUsers.findIndex((user) => user.id == userId);
  //   const userToUpdate = { ...newUsers[index], name: newName };

  //   newUsers[index] = userToUpdate;
  //   setUsers(newUsers);
  // };

  const onUpdateName = useCallback((userId, newName) => {
    setUsers((users) => {
      const newUsers = [...users];
      // The same reference to user objects are copied in the array newUsers so if we change the name of the user in the newUsers array and at the same time memoized the user component the change in the data is not reflected

      // const userToUpdate = newUsers.find((user) => user.id == userId);
      // // okay! find function returns the reference to the object in the array satisfying the condition
      // userToUpdate.name = newName;
      // setUsers(newUsers);

      const index = newUsers.findIndex((user) => user.id == userId);
      const userToUpdate = { ...newUsers[index], name: newName };

      newUsers[index] = userToUpdate;
      return newUsers;
    });
  }, []);

  // Every time the component rerenders a new instance of the function onUpdateName is created, as a result, even after memoizing the User component, since this function is passed as a prop to the User component, the component rerenders

  const handleToggleList = () => {
    setToggleList(!showList);
  };

  const calculateSumOfIds = () => {
    return users.reduce((acc, itr) => {
      console.log("Calculating Sum of ids", itr.id);
      return acc + itr.id;
    }, 0);
  };

  // const sumOfIds = users.reduce((acc, itr) => {
  //   console.log("Calculating Sum of ids", itr.id);
  //   return acc + itr.id;
  // }, 0);

  // useMemo is a react hook that memoises a value returned by a function which is memoised
  const sumOfIds = useMemo(calculateSumOfIds, [users]);
  //sumOfIds function is called on the mount of the component and whenever the data in the dependency array changes

  console.log("Render App", users);
  useEffect(() => {
    axios.get(GET_USERS_URL).then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <h2>Sum of ids: {sumOfIds}</h2>
      <button onClick={handleToggleList}>Toggle List</button>
      {/* <button onClick={() => onUpdateName(1, "Virendra Patel")}>
        update first user
      </button> */}
      <hr />
      {/*  */}
      {showList && <UserList onUpdateName={onUpdateName} users={users} />}
    </div>
  );
}

export default App;
