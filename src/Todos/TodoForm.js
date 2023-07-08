import { useState } from 'react'

import styles from './TodoForm.module.css'
import Button from './UI/Button'

const TodoForm = ({ addTodo }) => {
	const [textInInput, setTextInInput] = useState('')

	const onSubmitHandler = e => {
		e.preventDefault()
		addTodo(textInInput)
		setTextInInput('')
	}

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input
					type='text'
					placeholder='enter new task'
					value={textInInput}
					onChange={e => setTextInInput(e.target.value)}
				/>
				<Button> send new task</Button>
			</form>
		</div>
	)
}

export default TodoForm
