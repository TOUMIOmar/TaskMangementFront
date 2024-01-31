import './App.css';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTodo from './components/NavbarTodo';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


function App() {
  return (
 <div>
<NavbarTodo/>
<Routes>
  <Route path='/' element={<><Home/></>}/>
  <Route path='/login' element={<><Login/></>}/>
  <Route path='/register' element={<><Register/></>}/>
  <Route path='/profile' element={<><Profile/></>}/>
</Routes>
 </div>
  );
}

export default App;
