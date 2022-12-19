import { useState } from 'react';
import './App.css';
import Info from './components/Info';
import Weather from './components/Weather';

function App() {
  const [ınfo,setInfo] = useState([])
  const [state,setState] = useState(false)
  return (
    <div className="App">

      <Weather ınfo={ınfo} setInfo={setInfo} setState={setState} />
      <Info ınfo={ınfo} setInfo={setInfo}  state={state} />

    </div>
  );
}

export default App;
