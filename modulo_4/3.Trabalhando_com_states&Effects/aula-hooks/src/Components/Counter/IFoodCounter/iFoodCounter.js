import './IFoodCounter.css';

import { useState } from "react";

export function IFoodCounter() {
  const [value, setValue] = useState(10);
  const [buttonStyle, setButtonStyle] = useState('active');

  function downValue() {
    if (value === 1) {
      setButtonStyle('counter-button-minus-active')
    }

    if (value > 0) {
      setValue(value - 1);
    }
  }

  function upValue() {
    if (value === 1) {
      setButtonStyle('counter-button-plus-active')
    }

    setValue(value + 1);
  }

  return (
    <div className='countex-wrapper'>
      <button className={buttonStyle} onClick={downValue}>Reduzir</button>
      <p id="counter">{value}</p>
      <button className='counter-button-plus-active' onClick={upValue}>Aumentar</button>
    </div>
  )
}