import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const taskList = [
  {
    id: 1,
    text: 'clean litter box',
    day: 'Jan 23rd at 2:30pm',
    reminder: true
  },
  { id: 2, text: 'go somewhere', day: 'Jan 30th at midnight', reminder: false },
  { id: 3, text: 'do something', day: 'Feb 1st at noon', reminder: true }
]

function App() {
  const [tasks, setTasks] = useState(taskList)

  const noTasks = <p>No Tasks</p>

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id)
    })
  }

  const toggleReminder = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
      return updatedTasks
    })
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        noTasks
      )}
    </div>
  )
}

export default App
