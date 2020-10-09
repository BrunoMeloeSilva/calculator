import React, { useState } from "react"
import Button from "../Button/Button"
import Display from "../Display/Display"
import "./Calculator.css"
import buildOperation from "./services"


function Calculator() {
    
  const [result, SetResult] = useState(0)

  const buttons = ["AC","+/-","%","÷","7","8","9","×","4","5","6","-","1","2","3","+","0",".","="]

    return <div className="painel">
      <Display value={result}/>
      {
        buttons.map( key => ['+/-','%'].includes(key) 
        ? <Button key={key} onClick={e => SetResult(buildOperation(e))} value={key} disabled/>
        : <Button key={key} onClick={e => SetResult(buildOperation(e))} value={key}/> )
      }
    </div>
}

export default Calculator
