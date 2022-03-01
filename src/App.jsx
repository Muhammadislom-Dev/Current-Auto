import './App.css';
import { Route, Switch } from 'react-router-dom';
 
import HomePages from './Pages/HomePages/HomePages';
import Inventory from './Pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/inventory" component={Inventory} />
      <Route path="/" component={HomePages} />
      </Switch>
    </div>
  );
}

export default App;
