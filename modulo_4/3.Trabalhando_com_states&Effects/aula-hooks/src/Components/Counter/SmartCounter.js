import { useState } from "react";

export function SmartCounter() {
  const [quantity, setQuantity] = useState(10);

  function upQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <>
      <h3>SmartCounter</h3>
      <h1 id="counter">{quantity}</h1>
      <button onClick={upQuantity}>Aumentar</button>
    </>
  )
}