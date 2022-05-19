import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './component/Register';
import Addbook from './component/Addbook';
import View from './component/View';

function App() {
  return (
    <div >
      
      <Register/>
      <Addbook/>
      <View/>
  
    </div>
  );
}

export default App;
