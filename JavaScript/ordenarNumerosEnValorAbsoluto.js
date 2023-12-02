function sortAbsoluteNumbers(numbers) {
    let absoluteNumbers = numbers.sort((a,b)=> (Math.abs(a) - Math.abs(b)))
     return absoluteNumbers
     }