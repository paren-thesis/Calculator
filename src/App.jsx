import { useState } from 'react';
import './App.css';

function App() {

  const [ input, setInput ] = useState('');

  const hundleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <div className="container">
        <div className="mother">
          <div className="screen">{input || '0'}</div>
          <div className="child">
          <div className="keypad">
            <div className="row1">
              <button onClick={() => hundleClick('AC')}>AC</button>
              <button onClick={() => hundleClick('DEL')}>DEL</button>
              <button onClick={() => hundleClick('/')}>/</button>
            </div>
            <div className="row2">
              <button onClick={() => hundleClick('1')}>1</button>
              <button onClick={() => hundleClick('2')}>2</button>
              <button onClick={() => hundleClick('3')}>3</button>
              <button onClick={() => hundleClick('*')}>*</button>
            </div>
            <div className="row3">
              <button onClick={() => hundleClick('4')}>4</button>
              <button onClick={() => hundleClick('5')}>5</button>
              <button onClick={() => hundleClick('6')}>6</button>
              <button onClick={() => hundleClick('+')}>+</button>
            </div>
            <div className="row4">
            <button onClick={() => hundleClick('7')}>7</button>
            <button onClick={() => hundleClick('8')}>8</button>
            <button onClick={() => hundleClick('9')}>9</button>
            <button onClick={() => hundleClick('-')}>-</button>
            </div>
            <div className="row5">
            <button onClick={() => hundleClick('.')}>.</button>
            <button onClick={() => hundleClick('0')}>0</button>
            <button onClick={() => hundleClick('=')}>=</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
