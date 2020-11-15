import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "./redux/store";

const store = createStore();

const GlobalCSS = createGlobalStyle`
*{
  margin:0;
  padding:0;
  border:none;
  outline:none;
  text-decoration:none;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
