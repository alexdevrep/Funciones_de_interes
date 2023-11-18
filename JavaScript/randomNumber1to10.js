// Esta función nos generará un número aleatorio entero entre 1 y 10
// Sevilla a 18 de Noviembre de 2023

function getRandomNUmber() {
    //Generamos un número aleatorio entre 0 y 1 
    const random = Math.random()
    //Multiplicamos dicho número para que esté entre 0 y 10
    const multiplied = random *10
    //Redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied)
    //Sumamos 1 para que el número esté entre 1 y 10
    const result = rounded + 1
    //devolvemos el resultado

    return result
    
}

