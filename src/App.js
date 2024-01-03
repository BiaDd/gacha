import Slot from './components/Slot';
import './App.css';
import { ToggleButton, ButtonGroup } from '@mui/material';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <ButtonGroup size="large" className='slots'>
          <Slot />
          <Slot />
          <Slot />
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
