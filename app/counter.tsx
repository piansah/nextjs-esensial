"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} 
      className="px-4 py-2 bg-amber-600 text-white rounded-b-md">
        Increment</button>
    </div>
  );
}
