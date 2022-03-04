import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePages from './Pages/HomePages/HomePages';
import Inventory from './Pages/Inventory/Inventory';
import Pictures from './Pages/Pictures/Pictures';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/inventory" component={Inventory} />
      <Route path="/" component={HomePages} exact />
      <Route path="/pictures" component={Pictures} />
      </Switch>
    </div>
  );
}

export default App;
