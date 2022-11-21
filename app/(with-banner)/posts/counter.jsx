"use client";

import { useState } from "react";
/**
 * La función Contador devuelve un div que contiene una p y un botón.
 * La p muestra el conteo, y el botón incrementa el conteo
 * @returns Una función que devuelve un div con una p y un botón.
 */
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>count {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
