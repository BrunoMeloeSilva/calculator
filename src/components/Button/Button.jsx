import React from "react"
import "./Button.css"

function defineClass(params) {
    let typeButton = "painel__button"
    switch (params.value) {
        case '=':
            typeButton += " painel__button--equal"
            break;
        case '÷': case '×': case '+':  case '-':
            typeButton += " painel__button--basic-operation"
            break;
        case 'AC':
            typeButton += " painel__button--reset"
            break;
        case '+/-': case '%':
            typeButton += " painel__button--inactive"
            break;
        default:
    }
    return typeButton
}

function Button(params) { 
    return <button  className = {defineClass(params)} 
                disabled = {params.disabled}
                onClick = {params.onClick} >
                {params.value}
            </button>
}

export default Button