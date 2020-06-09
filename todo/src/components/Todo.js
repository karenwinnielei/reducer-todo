import React from 'react';

export default function Todo(props){
  return (
    <div className='todo'> 
      {props.state.map(task => (
        <p
          key={task.id}
          className={task.completed ? 'completed' : ''}
          onClick={() => props.toggleCompleted(task.id)}>
          {task.task}
        </p>
      ))}
    </div>
  )
}