import React, { useState } from "react"
import Button from "../Button/Button"
import Display from "../Display/Display"
import "./Calculator.css"
import buildOperation from "./services"


function Calculator() {
    
  const [result, SetResult] = useState(0)


    return <div className="painel">
        <Display value={result}/>
        <Button onClick={e => SetResult(buildOperation(e))} value="AC"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="+/-" disabled/>
        <Button onClick={e => SetResult(buildOperation(e))} value="%" disabled/>
        <Button onClick={e => SetResult(buildOperation(e))} value="÷"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="7"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="8"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="9"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="×"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="4"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="5"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="6"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="-"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="1"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="2"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="3"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="+"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="0"/>
        <Button onClick={e => SetResult(buildOperation(e))} value="."/>
        <Button onClick={e => SetResult(buildOperation(e))} value="="/>
  </div>
}

export default Calculator
