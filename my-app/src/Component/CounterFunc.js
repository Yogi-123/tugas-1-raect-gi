import React, { useState } from 'react';

let styleDiv = {
  backgroundColor : "white"
}

const CounterFunc = () => {
  const [countNum, setCountNum] = useState(0)

  const decrement = () => {
    setCountNum(countNum-1)
  }

  const increment = () => {
      setCountNum(countNum+1)
  }

  return (
    <div style={styleDiv}>
      <h1 style={{ color: "black" }}>Counter Function</h1>
      <button onClick={decrement}>-</button>
      <h1 style={{ display: "inline" }}>{countNum}</h1>
      <button onclick={increment}>+</button>
      <hr/>
    </div>
  );
}

export default CounterFunc;