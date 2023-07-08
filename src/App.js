import { useState } from 'react'
import './App.css'
import TodosList from './Todos/TodosList'
import TodoForm from './Todos/TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, indexTodo) => index !== indexTodo))
  }

  return (
    <div className="App">
      <h1>React todo</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
