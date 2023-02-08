import React, { useState } from 'react';
import Counter from './components/counter';
import './App.css';

const App: React.FC = () => {
  const [countVR, setCountVR] = useState(0);
  const [countVB, setCountVB] = useState(0);
  const [countP, setCountP] = useState(0);

  return (
    <div className="App">
      <div>
        <img src="icon.svg" className="logo" alt="steak" />
      </div>
      <h1>Calculateur alimentaire</h1>
      <p>
        Ce site vous permet de calculer votre émission de CO₂ en indiquant votre
        consommation de viande/poisson.
      </p>
      <Counter type="🥩 Viande rouge" count={countVR} setCount={setCountVR} />
      <Counter type="🍗 Viande blanche" count={countVB} setCount={setCountVB} />
      <Counter type="🐟 Poisson" count={countP} setCount={setCountP} />
      <p>
        Votre consommation journalière de viande/poisson est de {countVR + countVB + countP} g, ce qui
        équivaut à{' '}
        {((countVR * 60 / 1000) + (countVB * 12.3 / 1000) + (countP * 0.3 / 1000)).toFixed(2)} kg de CO₂ émis par an.
      </p>
    </div>
  );
};

export default App;
