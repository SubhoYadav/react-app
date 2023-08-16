import React from "react";
import ReactDOM from "react-dom";

// import Wrapper from "./Helpers/Wrapper";
// alternatively we can use react fragment

import { Fragment as Wrapper, useState } from "react";
import Notification from "./components/Notification";
import { useRef } from "react";

const NotificationPortal = (props) => {
  return props.showNotification && <Notification message={props.message} />;
};

export default function App() {
  const [showNotification, setShowNotification] = useState(false);
  const nameRef = useRef();
  const ageRef = useRef();
  return (
    <Wrapper>
      {/* The problem is we cannot return multiple root JSX elements from a react component */}
      <h2>I am Subho Yadav {JSON.stringify(showNotification)}</h2>
      <p>I am a Software Engineer !</p>
      <NotificationPortal></NotificationPortal> 
      {/* Signature: ReactDOM.createPortal(<React.Node>, selector of the element where the React.node is to be rendered) */}
      {ReactDOM.createPortal(
        <NotificationPortal
          showNotification={showNotification}
          message={"Hey There !"}
        />,
        document.getElementById("notification-root")
      )}
      <button
        className="btn btn-sm btn-danger"
        onClick={() => setShowNotification(!showNotification)}
      >
        What's New !
      </button>
      Name: <input type="text" ref={nameRef} />
      Age: <input type="text" ref={ageRef} />
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          let { current: name } = nameRef;
          let { current: age } = ageRef;
          console.log(name.value, age.value);
          name.value = "";
          age.value = "";
        }}
      >
        What's New !
      </button>
    </Wrapper>
  );
}

// I will show this notification in the root of the element while react will be rendering the component on click of the buton
// using react portals

// Here I am overcomming the issue by using a custom dumb component called Wrapper

// refs preserve the state between rerenders
