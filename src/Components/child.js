import React  from 'react'
// import counterContext from './Api/CounterContext';


let Child =(Props)  => {

    // let counterValue = useContext(counterContext) 
  
   return (
       <div>Hello World From Grand Child {Props.myProps}  </div>
   )
} ;

export default Child