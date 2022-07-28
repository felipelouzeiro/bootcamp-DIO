function validaArray(arr, num) {
  try {
    if(!arr || !num) throw new ReferenceError("Envie todos os parâmetros!");
    
    if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object!");
    
    if(typeof num !== 'number') throw new TypeError("O num precisa ser do tipo number!");
    
    if(arr.length < 1) throw new RangeError("Tamanho inválido!");

    return arr;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Reference Error: ");
      console.log(error.message);
    } else if (error instanceof TypeError) {
      console.log("Type Error: ");
      console.log(error.message);
    } else if (error instanceof TypeError) {
      console.log("Type Error Error: ");
      console.log(error.message);
    } else if (error instanceof RangeError) {
      console.log("Range Error: ");
      console.log(error.message);
    } else {
      console.log("Error não esperado: " + error)
    }
  }
}


console.log(validaArray(['item1'], 2));