import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom"
//IMPORT PAGES
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
//New Imports
import Profile from './PortfolioContainer/Home/Profile'

function App() {
  const URL = "http://localhost:3000/"
  return (
   <div className="App">
    
    <Header />
    <Profile />
    <Projects/>
    <Routes>
      <Route exact path="/" element ={<Home/>} />
      <Route path="/projects" element ={<Projects URL= {URL}/>} />
      <Route path="/about" element ={<About URL= {URL}/>} />
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
