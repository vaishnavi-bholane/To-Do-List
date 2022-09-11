import React, { useState,useEffect } from "react";
import './App.css';

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  //check for all,completed,uncompleted
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();

  }, []);

  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to Local
  const saveLocalTodos = () => {
      if(todos.length > 0){
      localStorage.setItem("todos",JSON.stringify(todos));
      }
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus = {setStatus} 
        
        />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
