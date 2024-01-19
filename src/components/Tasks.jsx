import Task from './Task.jsx'

export default function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}
