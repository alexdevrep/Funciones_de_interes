//Para ordenar números de menor a mayor 
// numerosmM = numeros menor a mayor
let numerosmM = [5, 10, 2, 25, 7]

numerosmM.sort(function(a, b) {
  return a - b
})

console.log(numerosmM) // [2, 5, 7, 10, 25]

//Para ordenar números de mayor a menor
// numerosMm = numeros mayor a menor

let numerosMm = [5, 10, 2, 25, 7]

numerosMm.sort(function(a, b) {
  return b - a
})

console.log(numerosMm) // [25, 10, 7, 5, 2]

/* Para personalizar cómo sort() ordena los elementos, puedes pasar una función de comparación como argumento. La función de comparación debe devolver:

    Un valor negativo si el primer argumento debe aparecer antes que el segundo.
    Un valor positivo si el segundo argumento debe aparecer antes que el primero.
    Cero si ambos argumentos son iguales.
*/
