import React , { useState } from 'react'
import './style.css'

function FromTodo(props) {
  const { onSubmitForm , onSubmitFormUpdate , filterValue , handleEdit} = props
  const [edit, setEdit] = useState(handleEdit)
  const [input , setInput] = useState(edit ? filterValue.value : '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(onSubmitForm)(
      onSubmitForm({
        id: Math.floor(Math.random() * 1000),
        value: input
      })
    )
    else{
      onSubmitFormUpdate({
        id: filterValue.id,
        value: input
      })
    }
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} >
      {
        edit ?
        <div className='form-edit-todo'>
          <div className='group-todo-item'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button className='btn-update' onClick={() => setEdit(false)}>Update</button>
          </div>
        </div>
        :
        <div>
          <div className='form-add-todo'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button>Add</button>
          </div>
        </div>
      }
    </form>
  )
}

export default FromTodo