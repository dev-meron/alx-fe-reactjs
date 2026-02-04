import { useState } from 'react';

function Counter() {
  // Step 2: Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {/* Step 4: Display current count */}
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Current Count: {count}</p>

      {/* Step 3: Buttons for actions */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white' }}
      >
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'gray', color: 'white' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
