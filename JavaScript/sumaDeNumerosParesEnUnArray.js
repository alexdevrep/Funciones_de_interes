function sumarPares(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++){
      if (numeros[i] % 2 === 0){
        suma +=numeros[i]
      }
        
    }
    // numeros [i] indica que mire el numero que justo está apuntando la variable i
    return suma
  } 