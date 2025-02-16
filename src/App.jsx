import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Test Website</h1>
      <div className="card-container">
        <div className="card"> 
          <h2>Example Button: </h2>
          <button onClick={() => setCount((count) => count + 1)}>
            Count: {count}
          </button>
        </div>

        {count > 5 ?         
        <div className="card"> 
          <h2>Secret Button: </h2>
          <button onClick={() => setCount((count) => count * 2)}>
            Count: {count}
          </button>
        </div>
        : null }

      </div>
    </>
  )
}

export default App
