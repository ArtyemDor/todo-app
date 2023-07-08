import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import styles from './TodoActions.module.css'
import Button from './UI/Button'

const TodoActions = ({
	resetTodos,
	deleteCompletedTodos,
	completedTodosExist
}) => {
	return (
		<div className={styles.todoActionsContainer}>
			<Button title='reset todos' onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
			<Button
				title='delete completed todos'
				onClick={deleteCompletedTodos}
				disabled={!completedTodosExist}
			>
				<RiDeleteBin2Line />
			</Button>
		</div>
	)
}

export default TodoActions
