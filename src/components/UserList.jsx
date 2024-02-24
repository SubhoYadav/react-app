import User from "./User";

function UserList(props) {
  console.log("Render UserList", props.users);

  const users = props.users;
  return (
    <table>
      <tbody>
        {users.map((user) => {
          return (
            <User onUpdateName={props.onUpdateName} key={user.id} user={user} />
          );
        })}
      </tbody>
    </table>
  );
}

export default UserList;
