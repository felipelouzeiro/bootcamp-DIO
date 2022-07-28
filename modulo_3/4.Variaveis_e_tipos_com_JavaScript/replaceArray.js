function substituiPares(array) {
  if (!array || !array.length) return -1;

  for (let i = 0; i < array.length; i ++) {
    if (array[i] === 0) {
      console.log("Já é zero!");
    } else if (array[i] % 2 === 0) {
      console.log("Valor substituído por 0.")
      array[i] = 0;
    } 
  } 
  return array;
}

substituiPares([1, 0, 5, 3, 8, 7, 10, 7, 6])