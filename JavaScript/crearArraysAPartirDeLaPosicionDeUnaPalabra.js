/* En esta pequeña función crearemos un nuevo array
a partir de la posición de una palabra en un array anterior
de manera que si una palabra ocupa la posición número 3 en un array
(empezando a contar por el número 0) la función nos devolverá un nuevo
array con las palabras del array anterior que tengan más de tres caracteres*/

function buscaPalabras(words, word) {
    let wordPosition = words.indexOf(word)
    let nuevoArray = words.filter(words => words.length > wordPosition)
    return nuevoArray
  }