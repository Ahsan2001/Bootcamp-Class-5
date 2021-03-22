import React, { useState } from 'react'
import Parent from './Components/parent';

function App() {

let [number, setNumber] = useState(10)

  return (
     <div>
      <Parent myProps={number}/>
      <button onClick={ () => {setNumber(++number)}}>Click me to add number</button>
      <h1>Voulme 1</h1>
     </div> 
  );
}

export default App;
