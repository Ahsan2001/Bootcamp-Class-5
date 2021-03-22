// three level of changing data

//------------------------Level 2 Start -

import React, { useState } from 'react'
import Parent from './Components/parent';
import myContext from './Components/context';

function App() {
let [number, setNumber] = useState(10)
  return (

    <myContext.Provider value={number}>
      <Parent />
      <button onClick={ () => {setNumber(++number)}}>Click me to add number</button>
     </myContext.Provider>
  );
}
export default App;
//------------------------Level 2 End -









//------------------------Level 1 Start -
{/*

import React, { useState } from 'react'
import Parent from './Components/parent';
function App() {
let [number, setNumber] = useState(10)
  return (
     <div>
      <Parent myProps={number}/>
      <button onClick={ () => {setNumber(++number)}}>Click me to add number</button>
     </div> 
  );
}
export default App;

*/}

// ------------------------- level 1 End







