import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetch('http://localhost:5000/tasks')
      const tasks = await data.json()

      setTasks(tasks)
    }

    fetchTasks()
  }, [])

  const noTasks = <p>No Tasks</p>

  const handleFormDisplay = () => setShowForm((prevState) => !prevState)

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
      <Header isVisible={showForm} onShowForm={handleFormDisplay} />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        noTasks
      )}
    </div>
  )
}

export default App
