import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    titleInput: '',
  }

  renderTodoInputField = () => {
    const {titleInput} = this.state

    const onChangeHandler = event => {
      this.setState({titleInput: event.target.value})
    }

    const onAddTodo = () => {
      if (titleInput === '') return

      this.setState(prevState => ({
        todosList: [...prevState.todosList, {id: uuidV4(), title: titleInput}],
        titleInput: '',
      }))
    }

    return (
      <div className="title-input-container">
        <input value={titleInput} onChange={onChangeHandler} />
        <button className="add-btn" type="button" onClick={onAddTodo}>
          Add
        </button>
      </div>
    )
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  saveTodo = task => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(item =>
        item.id === task.id ? task : item,
      ),
    }))
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          {this.renderTodoInputField()}
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                saveTodo={this.saveTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
