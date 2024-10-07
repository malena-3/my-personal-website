import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Gallery />
      <Contact />

    </div>
  );
}

export default App;
