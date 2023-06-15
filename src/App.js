import React,{useState} from 'react';
import "./App.css";
import Header from './components/Layout/Header';
import Medicine from "./components/Medicines/Medicine";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CardProvider"

const App=() =>{
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Medicine/>
      </main>
    </CartProvider>
  );
}

export default App;

