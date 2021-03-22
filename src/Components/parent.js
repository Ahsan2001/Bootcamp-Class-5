import React from 'react'
import Child from './child'


let Parent =(props)  => {
   return (
         <Child myProps={props.myProps}  /> )
    
} ;

export default Parent