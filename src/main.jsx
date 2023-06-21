import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

// Applications
import WebHooksFrontend from "./applications/webHooksFrontend/App";
import RazorPayIntegration from "./applications/webHooksFrontend/RazorPayIntegration";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <WebHooksFrontend></WebHooksFrontend> */}
    <RazorPayIntegration></RazorPayIntegration>
  </React.StrictMode>
);
