import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([])

  const noTasks = <p>No Tasks</p>

  const addTask = (text, day, reminder) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks]

      const id = Math.floor(Math.random() * 1000)
      updatedTasks.push({ id, text, day, reminder })
      return updatedTasks
    })
  }

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
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        noTasks
      )}
    </div>
  )
}

export default App
