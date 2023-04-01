
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1>
      <Home test="Bangladesh" test2="Sylhet"></Home>
      <Home test="UK" test2="London"></Home>
      <About></About>
      <Contact/> */}

      <HomePage></HomePage>
      <hr />
      <AboutPage></AboutPage>
      
    </div>
  );
}

export default App;
