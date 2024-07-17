import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handle_Inc = () =>{
    setCount(count + 1);
  }
  const handle_Dec = () => {
    setCount(count - 1);
  }

  return (
    <>
    <h2>This is Type Script App</h2>
    <p>Your count is {count}</p>
    <button onClick={handle_Inc}>Click Tuba For Increment</button>
    <button onClick={handle_Dec}>Click Noman For Decrement</button>
    </>
  )
}

export default App