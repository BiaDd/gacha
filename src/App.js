import { useState } from "react";
import Slot from './components/Slot';
import ButtonAppBar from './components/ButtonAppBar'
import './App.css';
import { ButtonGroup, Button, Grid } from '@mui/material';

const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function App() {
  const [symbol1, setSymbol1] = useState("NULL");
  const [symbol2, setSymbol2] = useState("NULL");
  const [symbol3, setSymbol3] = useState("NULL");

  const delay = ms => new Promise(res => setTimeout(res, ms));

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const roll = async () => {
    let rollTime = getRandomInt(10, 20);
    for (let i = 0; i < rollTime; i++) {
      await delay(200);
      let randomElement = symbols[Math.floor(Math.random() * symbols.length)];
      setSymbol1(randomElement);
    }
    rollTime = getRandomInt(10, 20);
    for (let i = 0; i < rollTime; i++) {
      await delay(200);
      let randomElement = symbols[Math.floor(Math.random() * symbols.length)];
      setSymbol2(randomElement);
    }
    rollTime = getRandomInt(10, 20);
    for (let i = 0; i < rollTime; i++) {
      await delay(200);
      let randomElement = symbols[Math.floor(Math.random() * symbols.length)];
      setSymbol3(randomElement);
    }

  }

  return (
    <div className="App">
      <div className="App-header">
        <ButtonAppBar />
        <div className="App-body">
          <div className="slots">
            <Slot symbol={symbol1} setSymbol={setSymbol1} />
            <Slot symbol={symbol2} setSymbol={setSymbol2} />
            <Slot symbol={symbol3} setSymbol={setSymbol3} />
          </div>
          <Button variant="contained" onClick={roll}>Roll!</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
