import './App.css';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Page from './Components/Page/Page';
import Currentpage from './Components/Current-page/Current-page';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Page />
      <Currentpage />
      <Footer />
    </div>
  );
}

export default App;
