import React from "react"
import "./Button.css"
import { defineClass } from "./services"

function Button(params) { 
    return <button  className = {defineClass(params)} 
                disabled = {params.disabled}
                onClick = {params.onClick} >
                {params.value}
            </button>
}

export default Button