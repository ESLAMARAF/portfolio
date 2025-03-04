import Header from "./components/header/Header";
import './App.css';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skils from "./components/skils/Skils";
import Projects from './components/work.jsx/Projects'
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
<Header/>
<main className="main">
  <Home/>
  <About/>
  <Skils/>
<Projects/>
<Contact/>
</main>
    </div>
  );
}

export default App;
