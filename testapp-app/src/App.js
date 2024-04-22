import Testapp  from './testapp';
import './App.css';
import Counterapp from './Hooks/Counterapp';
import Props from './Props';

function App() {
  return (
    <div className="App">
      <div>
        <Counterapp />
        <Props />
      </div>
    </div>
  );
}

export default App;
