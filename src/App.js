import './index.scss';
import React from 'react'

function App() {

  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">  
      <h2>Счётчик:</h2>
      <h1>{count}</h1>
    <div className="Buttons">
      <button className="Button" onClick={onClickMinus}>- Минус</button>
      <button className="Button" onClick={onClickPlus}>Плюс +</button>
    </div>
    </div>
  );
}

export default App;
