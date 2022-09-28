import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { populateProduce, toggleLike } from "./store/produce";
import {
  addProduce,
  increaseProduce,
  decreaseProduce,
  removeProduce,
  numberProduce,
} from "./store/cart";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addProduce = addProduce;
  window.removeProduce = removeProduce;
  window.increaseProduce = increaseProduce;
  window.decreaseProduce = decreaseProduce;
  window.numberProduce = numberProduce;
  window.toggleLike = toggleLike;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
