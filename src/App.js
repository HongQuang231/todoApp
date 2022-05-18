import React from "react";
import "./App.css";
import TodoApp from "./component/TodoApp";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <TodoApp />
        <Footer />
      </div>
    </>
  );
}

export default App;
