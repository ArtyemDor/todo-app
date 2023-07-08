const Todo = ({ text, deleteTodo, index }) => {
  return <h2 onDoubleClick={() => deleteTodo(index)}>{text}</h2>
}

export default Todo
