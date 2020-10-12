import React from "react"
import "./Display.css"


function Display(params) {

    return <input 
    className="painel__display" 
    type="number" 
    readOnly 
    {...params}/>
}

export default Display