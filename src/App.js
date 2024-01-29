import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestView from './pages/RestView';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div>
       <Header/>
            <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restview/:id' element={<RestView/>}/>

      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
