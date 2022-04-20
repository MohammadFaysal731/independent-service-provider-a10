import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Classes from './Pages/Classes/Classes';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Header from './Sheared/Header/Header';
import NotFound from './Sheared/NotFound/NotFound';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services/:servicesId' element={<Checkout></Checkout>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/classes' element={<Classes></Classes>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
