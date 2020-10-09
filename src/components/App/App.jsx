import React, { useState } from "react"
import "./App.css"
import buildOperation from "./services"


function App() {
    
  const [result, SetResult] = useState(0)

    return <div className="painel">
        <input className="painel__display" type="number" readOnly value={result}/>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--reset">AC</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--inactive">+/-</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--inactive">%</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--basic-operation">÷</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">7</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">8</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">9</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--basic-operation">×</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">4</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">5</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">6</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--basic-operation">-</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">1</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">2</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">3</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--basic-operation">+</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">0</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button">.</button>
        <button onClick={e => SetResult(buildOperation(e))} className="painel__button painel__button--equal">=</button>
  </div>
}

export default App
