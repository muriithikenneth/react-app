import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(count +1);
    };

    const decrement = ()=> {
        setCount(count -2)
    };
    const reset =()=>{
        setCount(0);
    };
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <div>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            </div>
            </div>
  );
}

export default Counter;
//counter component
const Counter = ({count, handleIncrement, handleDecrement}) =>{
    return (
    <div>
    <h1>Counter App</h1>
    <h2> {count} </h2>
    <button onClick={handleIncrement}> + </button>
    <button onClick={handleDecrement}> - </button>
    
    {/**Conditional rendering using the ternary operator */}
    {count > 10 ? <h3>Count is greater than 10</h3> : <h3>Count is less than 10</h3>}
    
    {/**Conditional rendering using the && operator */}
    {count < 0 && <h3>Count is less than 0</h3>}
    </div>
    )
    }