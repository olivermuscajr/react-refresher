import "./App.css"
import NavBar from "./components/NavBar"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>

  )

}
export default App

















/* import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")


  function handleAddTodo() {
    if (input.trim === "") {
      setInput("")
      return
    }
    setTodos([...todos, input])
    setInput("")

  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todosIndex) => {
      return todosIndex !== index
    })
    setTodos(newTodos)
  }

  return (
    <main>
      <div className="input-section">
        <input value={input} placeholder="Add todo" onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}></button>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default App
 */


















/* import { useState } from "react"



function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function handleAddTodo() {
    if (input.trim() === "") {
      setInput("")
    }
    setTodos([...todos, input])
    setInput("")
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodos)
  }

  return (
    <>
      <div className="input">
        <input value={input} placeholder="Add todo" onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div className="todo-lists">
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}>
              {todo}
              <button onClick={() => handleDeleteTodo(index)}>❌</button>
            </li>
          )
          )}
        </ul>
      </div>

    </>
  )
}

export default App
 */