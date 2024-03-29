import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const fetchSingleTask = async (id) => {
  const data = await fetch(`http://localhost:5000/tasks/${id}`)
  return await data.json()
}

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

  const addTask = async (text, day, reminder) => {
    const task = { text, day, reminder }
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const taskCreated = await res.json()

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks]

      updatedTasks.push({ id: taskCreated.id, text, day, reminder })
      return updatedTasks
    })
  }

  const deleteTask = async (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id)
    })
  }

  const toggleReminder = async (id) => {
    const singleTask = await fetchSingleTask(id)
    const taskUpdate = { ...singleTask, reminder: !singleTask.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskUpdate)
    })
    const data = await res.json()

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? data : task
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
