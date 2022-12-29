import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom"
//IMPORT PAGES
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  const URL = "http://localhost:3000/"
  return (
   <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element ={<Home/>} />
      <Route path="/" element ={<Projects URL ={URL}/>} />
      <Route path="/about" elements ={<About URL= {URL}/>} />
    </Routes>
    <Footer />
   </div>
  );
}

export default App;
