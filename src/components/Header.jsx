import Button from './Button'
export default function Header({ isVisible, onShowForm }) {
  const color = isVisible ? 'red' : 'green'
  const text = isVisible ? 'Hide' : 'Add'

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button color={color} text={text} onClick={onShowForm} />
    </header>
  )
}
