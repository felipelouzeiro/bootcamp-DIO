import { Counter } from '../Counter/Counter';
import { IFoodCounter } from '../Counter/IFoodCounter/iFoodCounter';
import { SmartCounter } from '../Counter/SmartCounter';
import './App.css';

function App() {
  
  return (
    <div>
      <Counter />
      <SmartCounter />
      <IFoodCounter />
    </div>
  );
}

export default App;
