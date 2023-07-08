import { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [textInInput, setTextInInput] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(textInInput)
    setTextInInput('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="enter new task"
          value={textInInput}
          onChange={(e) => setTextInInput(e.target.value)}
        />
        <button> send new task</button>
      </form>
    </div>
  )
}

export default TodoForm
