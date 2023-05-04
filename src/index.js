import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/todoApp/TodoApp";

const app = ReactDOM.createRoot(document.querySelector(".root"));
app.render(<TodoApp />);
