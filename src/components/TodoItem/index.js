import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, saveTodo} = props
  const {id, title} = todoDetails

  const [isSaved, setIsSaved] = useState(true)
  const [newTitle, setNewTitle] = useState(title)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onSaveTodo = () => {
    setIsSaved(true)
    saveTodo({id, title: newTitle})
  }

  const onEditClick = () => setIsSaved(false)

  const onChangeHandler = event => setNewTitle(event.target.value)

  return (
    <li className="todo-item">
      {isSaved ? (
        <p className="title">{title}</p>
      ) : (
        <input className="title" value={newTitle} onChange={onChangeHandler} />
      )}
      {isSaved ? (
        <button
          type="button"
          className="delete-btn edit-btn"
          onClick={onEditClick}
        >
          Edit
        </button>
      ) : (
        <button
          type="button"
          className="delete-btn save-btn"
          onClick={onSaveTodo}
        >
          Save
        </button>
      )}
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
