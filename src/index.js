import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./Services/Reducers/index"

const store = createStore(rootReducer)
console.warn("store data", store)



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);