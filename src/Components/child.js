import React, { useContext } from 'react'
import counterContext from './Api/CounterContext';


let Child =()  => {

    let counterValue = useContext(counterContext) 
  
   return (
       <div>Hello World From Grand Child {counterValue} </div>
   )
} ;

export default Child