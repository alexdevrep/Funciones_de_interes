
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "JavaScript") {
          return [i, j]
        }
      }
    }
    return [-1, -1]
  }
     
       
    
  