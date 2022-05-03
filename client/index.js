import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* <Route exact path="/feed" element={<FeedContainer />} />
        <Route exact path="/signup" element={<SignupContainer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <p>Hello, World!</p>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
