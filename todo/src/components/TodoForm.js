import React, { useReducer, useState } from 'react';

export default function TodoForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type = 'text'
          name = 'newTask'
          onChange={props.handleChanges}
        />
        <button type='submit'>Add Task</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    </div>
  )
}