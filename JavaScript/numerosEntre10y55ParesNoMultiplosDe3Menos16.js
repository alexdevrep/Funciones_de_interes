/*
Es un ejercicio del RoadMap retos de programación de mouredev en 
el que imprimimos todos aquellos números entre 10 y 55 que sean pares menos el 
número 16 y que no sean múltiplos de 3
*/

console.log("Resultado Dificultad EXTRA:")
for (let numero = 10;numero<=55;numero++){
    if (numero % 2 === 0 && numero !== 16 && numero % 3 !== 0){  
        console.log(numero)
    }
    
}