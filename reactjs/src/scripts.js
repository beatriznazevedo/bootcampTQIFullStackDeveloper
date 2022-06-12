import react from "react";
import reactDom from "react-dom";
import "./styles.css"

const App = () => {
    return (
        <div className="App">
            Hello world
        </div>
    )
}


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)