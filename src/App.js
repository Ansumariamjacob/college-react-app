import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './component/Register';
import Addbook from './component/Addbook';
import View from './component/View';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path={'/'} exact element={<Login/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path={"/add"} exact element={<Addbook/>}/>
        <Route path={"/view"} exact element={<View/>}/>
      </Routes>
      </BrowserRouter>
      
      
      
  
    </div>
  );
}

export default App;
