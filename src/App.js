import { useState } from 'react'
import './App.css'
import TodosList from './src/Todos/TodosList'
import TodoForm from './src/Todos/TodoForm'

function App() {
  const [todos, setTodos] = useState(['first', 'second'])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, indexTodo) => index !== indexTodo))
  }

  return (
    <div className="App">
      <h1>React todo</h1>
      <TodosList todos={todos} deleteTodo={deleteTodoHandler} />
      <TodoForm addTodo={addTodoHandler} />
    </div>
  )
}

export default App
