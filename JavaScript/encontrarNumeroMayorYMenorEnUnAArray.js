
  function obtenerLibrosExtremos(paginas) {
    if (paginas.length < 2) {
        return "Se necesitan al menos dos libros para comparar.";
    }

    let minPaginas = Infinity;
    let maxPaginas = -Infinity;
    let indiceMin = 0;
    let indiceMax = 0;

    for (let i = 0; i < paginas.length; i++) {
        if (paginas[i] < minPaginas) {
            minPaginas = paginas[i];
            indiceMin = i;
        }
        if (paginas[i] > maxPaginas) {
            maxPaginas = paginas[i];
            indiceMax = i;
        }
    }

    return [indiceMin, indiceMax];
}