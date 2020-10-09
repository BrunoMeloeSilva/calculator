function calculation(values) {
    var firstNumer = Number(values[0])
    var signal = values[1]
    var secondNumer = Number(values[2])
    values[1] = ""
    values[2] = ""
    values[3] = true
    switch (signal) {
      case '+':
        values[0] = firstNumer + secondNumer
        break;
      case '-':
        values[0] = firstNumer - secondNumer
        break;
      case '×':
        values[0] = firstNumer * secondNumer
        break;
      case '÷':
        values[0] = firstNumer / secondNumer
        break;
      default:
    }
    return values
  }
  
  function preparesOperation() {
    var index = 0
    //Posição 0 = valor 1, Posição 1 = operador, Posição 2 = valor 2, Posição 3 = Se já ocorreu o calculo
    var values = ['','','', false]
    var operators = ['+','-','×','÷','=']
  
    function buildOperation(e) {
      var buttonContent = e.target.innerHTML
      //Reseta a calculadora
      if(buttonContent === 'AC') {
        index = 0
        values = ['','','', false]
        return 0
      }
      //Se já digitou o ponto, não aceita denovo e não aceita nenhum caractere da lista de operators
      if(!(buttonContent === '.' &&  values[index].includes('.')) && !operators.includes(buttonContent) ) {
        //Se houve retorno de um calculo e ao invés de digitar um operador matematico, digitar um numero, reseta tudo
        if(values[3] && values[1] === "") {
          index = 0
          values[index] = ""
          values[3] = false     
        } 
        values[index] += buttonContent 
      } else if(operators.includes(buttonContent)) {
          if(values[1].length === 1 && values[2].length > 0) {
            values = calculation(values)
          }
          values[1] = buttonContent === '=' ? '' : buttonContent
          index = 2 
        }
      console.log(values)
      return values[2].length > 0 ? values[2] : values[0]
    }
  
    return buildOperation
  }
  
  export default preparesOperation()