import React,{useState} from 'react'


const TodoForm = ({addTodo}) => {
  const [value, Setvalue] =useState([])

  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value)
    
    Setvalue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input ' value={value} placeholder='Name The Task' onChange={(e) => Setvalue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add-List</button>
    </form>
  )
}

export default TodoForm
