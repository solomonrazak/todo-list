import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import FormTodo from "./FormTodo";
import Todo from "./Todo";

function App() {
  const displayStyle = {
    width: "100vw",
    height: "100vh",
  };

  // useState to hold the current todos
  const [todos, setTodos] = useState([
    {
      text: "Get Married",
      isDone: false,
    },
  ]);

  // function to add a new todo

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]; // used spread operator to make a copy of the original todos and add new one based on the text input.
    setTodos(newTodos);
  };

  // if todos is done.
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true; // set to true     that poarticular todo at the specific index if its done
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos]; // make a copy of the todos
    newTodos.splice(index, 1); // remove the todos at the specific index you want using splice
    setTodos(newTodos); // setnewTodos
  };

  return (
    <div className="App">
      <div className="container bg-info" style={displayStyle}>
        <h1 className="fs-2 text-center pt-5">Maamee and Ntiri Sex Bucket List</h1>
        <FormTodo addTodo={addTodo}/>
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
