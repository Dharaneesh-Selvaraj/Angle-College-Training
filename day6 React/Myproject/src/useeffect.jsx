import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // This useEffect runs after every render
  useEffect(() => {
    const timer = setInterval(() => {
        console.log('Timer tick');
      }, 1000);
      
      // Cleanup function - runs before unmount and before re-running effect
      return () => {
        clearInterval(timer);
        console.log('Timer cleared');
      };
    
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}