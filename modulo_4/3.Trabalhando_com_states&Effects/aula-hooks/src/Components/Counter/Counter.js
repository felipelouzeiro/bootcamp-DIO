export function Counter() {
  let quantity = 10;

  function upQuantity() {
    quantity = quantity +1;
    document.getElementById("counter").innerHTML = quantity;
  }

  return (
    <>
      <h3>Counter</h3>
      <h1 id="counter">{quantity}</h1>
      <button onClick={upQuantity}>Aumentar</button>
    </>
  )
}