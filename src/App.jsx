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

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id)
    })
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App
