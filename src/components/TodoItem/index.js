// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props

  const {title, id} = todoDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="container">
      <div className="card-container">
        <p className="title">{title}</p>

        <button className="delete-button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
