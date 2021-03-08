import React from 'react'
import './App.css';
import counterContext from './Components/Api/CounterContext';
import Parent from './Components/parent'



function App() {
  return (
    <counterContext.Provider value={"Ahsan"}>
    <div>
      <Parent/>
    </div> 
    </counterContext.Provider>
  );
}

export default App;
