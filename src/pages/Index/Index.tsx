import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./Index.css";

function App() {
    const [count, setCount] = useState(0);
    const shouldDisableResetButton = count === 0;

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Do TDD with TypeScript Vite + React</h1>
            <h2>
                CD ready SPA starter pack by{" "}
                <a href="https://linkedin.com/in/aychtang" target="_blank">
                    Howard Tang
                </a>
            </h2>
            <div className="card">
                <h3>counter value is {count}</h3>

                <button onClick={() => setCount((count) => count + 1)}>
                    increment
                </button>

                <button onClick={() => setCount((count) => count - 1)}>
                    decrement
                </button>

                <button
                    onClick={() => setCount(0)}
                    disabled={shouldDisableResetButton}
                >
                    reset
                </button>
            </div>
        </div>
    );
}

export default App;
