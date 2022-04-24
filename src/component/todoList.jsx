import React, { useState } from 'react'
import FromTodo from './todoForm'
import Todo from './todo'

function Todolist() {
  const [todos,setTodos] = useState([])

  const addTodo = (object) =>{
    if(object.value.length === 0) return;
    setTodos([...todos,object])
  }

  const updateTodo = (todoId,newValue) => {
    setTodos(todos.map((element)=> element.id === todoId ? newValue : element))
  }

  const deleteTodo = (todoId) =>{
    console.log(todoId)
    const deleted =  todos.filter(element => element.id !== todoId)
    setTodos(deleted)
  }

  return (
    <div className='todo-main'>
      <h1>Todo Pratice Learning pattern flow state and props</h1>
      <FromTodo onSubmitForm={addTodo} />
      <Todo todos={todos} onSubmitFormUpdate={updateTodo} onDelete={deleteTodo}/> 
    </div>
  )
}

export default Todolist