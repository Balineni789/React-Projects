
import React from 'react'
import { useState } from 'react' // Use-State From Hook //

const Counter = () =>{
const [count,setcount] = useState(0) 

const Increment = () =>{
    setcount(count + 1);
 };

const Decrement = () =>{
   if(count > 0){
    setcount(count - 1)
   }else{
    setcount(100)
   }
 };

  const reset = ()=>{
   setcount(0)
  }
 return(
    <div className='cont'>
        <h1><p>Count : {count}</p></h1>
        <button id ="b1" onClick = {Increment}>Increment</button>
        <button id ="b2" onClick = {Decrement}>Decrement</button>
        <button id ="b1" onClick = {reset}>Reset</button>
    </div>
   );
};

export default Counter;