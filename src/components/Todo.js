import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faTrash);

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed':"" }`} id='text'  >{task.task}</p>
      <div className='icons'>
        <FontAwesomeIcon className='subicons' onClick={()=> editTodo(task.id)} id='edit' icon="pen-to-square"/>
        <FontAwesomeIcon className='subicons' onClick={() => deleteTodo(task.id)} id='trash' icon="trash"/>
      </div>
    </div>
  )
}

export default Todo
