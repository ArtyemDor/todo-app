import Todo from './Todo'
import styles from './TodoList.module.css'

const TodosList = ({ todos, deleteTodo, toggleTodo }) => {
	return (
		<div className={styles.todoListContainer}>
			{todos.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					toggleTodo={toggleTodo}
				/>
			))}
		</div>
	)
}

export default TodosList
