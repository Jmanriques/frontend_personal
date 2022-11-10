
import './css/App.css';
//componentes
import Navbar from './components/navbar/Navbar';
import Nosotros from './components/Nosotros';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="App">

          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/nosotros" element={<Nosotros />}/> 

          </Routes>
          <Nosotros/>
          <Home/>
          <Footer/>
    
    
      
        
      </div>
    </div>
  );
}

export default App;
