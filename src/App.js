import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 10);
  }
  function decrement() {
    setCount(count - 10);
  }
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
