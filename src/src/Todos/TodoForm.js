import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [textInInput, setTextInInput] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(textInInput)
    setTextInInput('')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="enter new task"
        value={textInInput}
        onChange={(e) => setTextInInput(e.target.value)}
      />
      <button> send new task</button>
    </form>
  )
}

export default TodoForm
