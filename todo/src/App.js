import React, { useState, useReducer } from 'react';

import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import { initialState, reducer } from './reducers/todoReducer'

import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTask(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: newTask});
    setNewTask('');

  }

  const toggleCompleted = click => {
    dispatch ({ type: 'TOGGLE_COMPLETED', payload: click})
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <h1>Another Todo App</h1>
      <TodoForm
        handleChanges={handleChanges} 
        handleSubmit={handleSubmit}
        clearCompleted={clearCompleted}
      />
      <Todo 
        state={state}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;
