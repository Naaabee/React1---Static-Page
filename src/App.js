import { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Main from './components/Main';

function App() {

  const [state, setState] = useState(false)

  function toggle() {
    setState(prevState => !prevState)
    console.log(state)
  }

  return (
    <div className='container'>
      <Header on={state} handleClick={toggle}/>
      <Main on={state}/>
    </div>
  );
}

export default App;
