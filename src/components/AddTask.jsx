export default function AddTask() {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input type='text' id='task' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label htmlFor='day&time'>Day & Time</label>
        <input type='text' id='day&time' placeholder='Add Date' />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input type='checkbox' id='reminder' />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
