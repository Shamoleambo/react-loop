export default function Header({ title='Task Tracker' }) {
  return (
    <header>
      <h1 style={{color: 'red', backgroundColor: 'blue'}}>{title}</h1>
    </header>
  )
}
