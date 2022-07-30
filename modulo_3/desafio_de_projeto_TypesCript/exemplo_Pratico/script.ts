let button = document.getElementById('btn');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros(num1: number, num2: number) {
  return num1 + num2;
}

if (button) {
  button.addEventListener('click', () => {
    if (input1 && input2) {
      console.log(somarNumeros(+input1.value, +input2.value));
    }
  });
}
