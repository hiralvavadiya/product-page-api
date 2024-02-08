import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Singlepro from './Components/Singlepro';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={ <Product/> } />
        <Route path="/:id" element={ <Singlepro/> } />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </>
  );
}

export default App;
