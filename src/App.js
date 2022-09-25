import './styles/App/App.css';
import Signature from './Signature';
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus() {
    setResult(result + Number(inputRef.current.value));
    resetInput();
  }

  function minus() {
    setResult(result - Number(inputRef.current.value));
    resetInput();
  }

  function times() {
    setResult(result * Number(inputRef.current.value));
    resetInput();
  }

  function divide() {
    setResult(result / Number(inputRef.current.value));
    resetInput();
  }

  function resetInput() {
    inputRef.current.value = 0;
  }

  function resetResult() {
    setResult(0);
  }

  function numberPress(number) {
    inputRef.current.value = Number(String(inputRef.current.value) + String(number.number));
  }

  function Keypad() {
    let numbers = [];
    for (let i = 0; i <= 9; i ++) {
      numbers.push(i);
    }

    let numberGrid = [];
    numbers.forEach((number) => 
      numberGrid.push(
        <button key={number.toString()} className={"btn number num" + String(number)} onClick={() => numberPress({number})}>{String(number)}</button>
        )
      );

    return numberGrid;
  }

  function Functions() {
    return (
      <>
      <button className="btn operator plus" onClick={plus}>+</button>
      <button className="btn operator minus" onClick={minus}>-</button>
      <button className="btn operator times" onClick={times}>x</button>
      <button className="btn operator divide" onClick={divide}>/</button>
      <button className="btn reset input" onClick={resetInput}>C</button>
      <button className="btn reset result" onClick={resetResult}>AC</button>
      </>
    );
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Reactulator 🥴</h1>
        Pretty basic, enter a number and press an operator!
      </header>
      <div className="container">
        <div className="result" ref={resultRef}>
          {String(result)}
        </div>
        <input
          className="textbox"
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type or enter a number"
        />
        <div className="key-container">
          <Keypad />
          <Functions />
        </div>
      </div>
      <Signature />
    </div>
  );
}

export default App;
