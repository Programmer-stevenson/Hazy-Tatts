import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Always load at the top (hero), never restore the previous scroll position.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
// Strip any #section hash so the browser doesn't jump to it on refresh.
if (window.location.hash) {
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
// Run again after load in case images/layout shift the scroll.
window.addEventListener("load", () => window.scrollTo(0, 0));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);