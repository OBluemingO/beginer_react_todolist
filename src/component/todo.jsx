import React, { useState } from 'react'
import FromTodo from './todoForm'
import './style.css'

function Todo(props) {
  const { todos , onSubmitFormUpdate , onDelete} = props
  const [edit,setEdit] = useState({
    id:null,
    value:''
  })

  const submitUpdate = value => {
    onSubmitFormUpdate(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if(edit.id){
    const value = todos.find(element => element.id === edit.id)
    return(
      <>
        <FromTodo filterValue={value} onSubmitFormUpdate={submitUpdate} handleEdit={true}/>
      </>
    );
  }

  return (
    <div className='groups-todos'>
      {
        todos.map(element => 
          <div className='group-todo-item' key={Math.floor(Math.random() * 10000)}>
            <h3>{element.value}</h3>
            <button className='btn-edit' onClick={() => setEdit({ id: element.id, value: element.value })}> Edit </button>
            <button className='btn-delete' onClick={() => onDelete(element.id)}> Delete </button>
          </div>
        )
      }
    </div>
  )
}

export default Todo