import './App.css';
import callErrorLog from './Api/log';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => callErrorLog()}>
          Click Send Error
        </button>
      </header>
    </div>
  );
}

export default App;
