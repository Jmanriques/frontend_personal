
import './css/App.css';
//componentes
import Navbar from './components/navbar/Navbar';
import Nosotros from './components/Nosotros';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LoginView from './components/usuarios/login';
import UsuariosIndex from './components/usuarios';

function App() {
  return (
    <div>
      <div className="App">

          <Navbar logged={false}/>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/nosotros" element={<Nosotros />}/> 
            <Route path="/login" element={<LoginView/>}/> 
            <Route path="/index" element={<UsuariosIndex/>}/> 

          </Routes>
          <Nosotros/>
          <Home/>
          <LoginView/>
          <UsuariosIndex/>
          
          <Footer/>
    
    
      
        
      </div>
    </div>
  );
}

export default App;
