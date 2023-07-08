import Todo from './Todo'

const TodosList = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </>
  )
}

export default TodosList
