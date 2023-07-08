import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'
import TodoActions from './Todos/TodoActions'
import TodoForm from './Todos/TodoForm'
import TodoList from './Todos/TodoList'

function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = text => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4()
		}

		setTodos([...todos, newTodo])
	}

	const deleteTodoHandler = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodoHandler = id => {
		setTodos(
			todos.map(todo => {
				return id === todo.id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			})
		)
	}

	return (
		<div className='App'>
			<h1>React todo</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoActions />
			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
		</div>
	)
}

export default App
