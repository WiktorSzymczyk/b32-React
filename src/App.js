import React, {useState} from 'react'
import './index.css'

function App() {

  const [state, setState] = useState({count: 4, name: 'Wiktor', nametwo: 'Kozqa'})
  const count = state.count
  const name = state.name
  const nametwo = state.nametwo

  function addCount(){
    setState(prevState => {
      return {...prevState, count: prevState.count + 1}
    })
  }

  function lessCount(){
    return setState(prevState => {
      return{...prevState, count: prevState.count - 1}
    })
  }
    return (
    <>
      <button onClick={lessCount}>-</button>
      <span>{count}</span> 
      <span>{name}</span> 
      <span>{nametwo}</span>
      <button onClick={addCount}>+</button>
    </>
  );
}

export default App;
