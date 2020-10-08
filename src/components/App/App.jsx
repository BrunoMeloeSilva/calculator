import React from "react"
import "./App.css"

function App() {
    return <div class="painel">
        <input class="painel__display" type="number" readonly="readonly" value="0"/>
        <button class="painel__button painel__button--reset">AC</button>
        <button class="painel__button painel__button--inactive">+/-</button>
        <button class="painel__button painel__button--inactive">%</button>
        <button class="painel__button painel__button--basic-operation">÷</button>
        <button class="painel__button">7</button>
        <button class="painel__button">8</button>
        <button class="painel__button">9</button>
        <button class="painel__button painel__button--basic-operation">×</button>
        <button class="painel__button">4</button>
        <button class="painel__button">5</button>
        <button class="painel__button">6</button>
        <button class="painel__button painel__button--basic-operation">-</button>
        <button class="painel__button">1</button>
        <button class="painel__button">2</button>
        <button class="painel__button">3</button>
        <button class="painel__button painel__button--basic-operation">+</button>
        <button class="painel__button">0</button>
        <button class="painel__button">.</button>
        <button class="painel__button painel__button--equal">=</button>
  </div>
}

export default App
