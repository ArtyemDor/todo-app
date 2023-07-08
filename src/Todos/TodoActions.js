import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import styles from './TodoActions.module.css'
import Button from './UI/Button'

const TodoActions = () => {
	return (
		<div className={styles.todoActionsContainer}>
			<Button>
				<RiDeleteBin2Line />
			</Button>
			<Button>
				<RiRefreshLine />
			</Button>
		</div>
	)
}

export default TodoActions
