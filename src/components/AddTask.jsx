import { useState } from 'react'

export default function AddTask() {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleDay = (event) => {
    setDay(event.target.value)
  }

  const handleReminder = (event) => {
    setReminder(event.currentTarget.checked)
  }

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          id='task'
          placeholder='Add Task'
          onChange={handleText}
          value={text}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='day&time'>Day & Time</label>
        <input
          type='text'
          id='day&time'
          placeholder='Add Date'
          onChange={handleDay}
          value={day}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input type='checkbox' id='reminder' onChange={handleReminder} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
