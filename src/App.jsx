import { useReducer } from "react";
import UserForm from "./components/UserForm";
import Usertable from "./components/UserTable";
// import user from "./data/users";

const actions = {
  ADD_STUDENT: "ADD_STUDENT",
  CLEAR_STUDENT: "CLEAR_STUDENT",
  DELETE_FIRST: "DELETE_FIRST",
  DELETE_LAST: "DELETE_LAST",
  DELETE: "DELETE",
}

const reducerFunction = (state, action) => {
  // console.log({ state, action });
  const {type, payload} = action
  console.log("TYPE", type) 
  switch(type) {
    case actions.ADD_STUDENT:
      let newEntry = {
        id: state.length + 1,
      };
      newEntry = Object.assign(newEntry, action.payload);
      return [...state, newEntry];
    break;
    case actions.CLEAR_STUDENT:
      return [];
    break;
    case actions.DELETE_FIRST:
      let newState = [...state]
      newState.shift()
      return newState
    break;
    case actions.DELETE_LAST:
      console.log("PPp")
      let nState = [...state]
      nState.pop()
      return nState
    break;
    case actions.DELETE:
      let newVal = [...state]
      newVal.splice(payload,1)
      return newVal
    break;
    default:
      console.error("No case to handle action: ", type)
      return state
  }
};

const initialState = [];

function App() {
  const [users, dispatch] = useReducer(reducerFunction, initialState);

  const handleUserAdd = (newUser) => {
    console.log(newUser);
    dispatch({
      type: actions.ADD_STUDENT,
      payload: newUser,
    });
  };

  const handleClearUser = (newUser) => {
    dispatch({
      type: actions.CLEAR_STUDENT,
      payload: [],
    });
  };
  return (
    <div>
      <UserForm onSubmit={handleUserAdd} />
      <button onClick={handleClearUser}>Clear</button>
      <button onClick={()=> dispatch({type: actions.DELETE_FIRST})}>Delete First</button>
      <button onClick={() => dispatch({type: actions.DELETE_LAST})}>Delete Last</button>

      <hr />
      <Usertable users={users} onDelete={(index)=> {
        dispatch({
          type: actions.DELETE,
          payload: index
        })
      }} />
    </div>
  );
}

export default App;
