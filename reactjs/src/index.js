import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element = 'Digital Innovation One'
const element2 = <h1>Hello, world!</h1>

function App() {
  return (
    <div> 
      {element}
      {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)