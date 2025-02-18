import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='top' >
      <div>
        <img src="src/assets/openai.png" className='image' />
      </div>
      <div>
        <h1>Test Website</h1>
      </div>
    </div>
      <div className="card-container">
        <div className="card"> 
          <h2>Example Button: </h2>
          <button onClick={() => setCount((count) => count + 1)} className='btn btn-danger'>
            Count: {count}
          </button>
        </div>

        {count > 5 ?         
        <div className="card"> 
          <h2>Secret Button: </h2>
          <button onClick={() => setCount((count) => count * 2)} className='btn btn-warning '>
            Count: {count}
          </button>
        </div>
        : null }

      </div>
    
    </>
  )
}

export default App
