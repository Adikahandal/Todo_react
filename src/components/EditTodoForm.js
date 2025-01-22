import React,{useState} from 'react'


const EditTodoForm = ({editTodo,task}) => {
  const [value, Setvalue] =useState(task.task)

  const handleSubmit = e =>{
    e.preventDefault();
    editTodo(value,task.id);
    
    Setvalue("")
  }
  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input ' value={value} placeholder='Update the task' onChange={(e) => Setvalue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}

export default EditTodoForm