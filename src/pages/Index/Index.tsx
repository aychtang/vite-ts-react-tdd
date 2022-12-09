import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './Index.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <h2>count is {count}</h2>

                <button onClick={() => setCount((count) => count + 1)}>
                    increment
                </button>

                <button onClick={() => setCount((count) => count - 1)}>
                    decrement
                </button>
            </div>
        </div>
    )
}

export default App
