import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="mother">
          <div className="screen">0</div>
          <div className="child">
          <div className="keypad">
            <div className="row1">
              <button>AC</button>
              <button>DEL</button>
              <button>/</button>
            </div>
            <div className="row2">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>*</button>
            </div>
            <div className="row3">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>+</button>
            </div>
            <div className="row4">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            </div>
            <div className="row5">
            <button>.</button>
            <button>0</button>
            <button>=</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
