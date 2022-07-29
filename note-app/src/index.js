import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { noteReducer } from "./store";
import { createStore } from "redux";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

const store = createStore(noteReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
