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

// const faqArray = [
//   {
//     question: "How quickly can I register?",
//     answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
//   },
//   {
//     question: "Why can not I give my orders at affordable prices?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
//   },
//   {
//     question: "How can I cancel my order?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
//   },
//   {
//     question: "Who can give a complete and qualitative answer to my questions?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
//   },
//   {
//     question: "How can I see all my orders?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
//   },
// ]

export default App;
