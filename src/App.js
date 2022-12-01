import {Routes, Route} from 'react-router-dom';
import {useState,createContext,useEffect} from 'react'

import './App.css';
import SignUp from './pages/signUp';
import SignInForm from './components/Login/signInForm';
import SignIn from './pages/signIn';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Pet from './pages/pet';
import Care from './pages/care';
import Cart from './pages/cart';
import Category from './pages/category';
import PetProduct from './pages/petProduct';
import {pets,petFoods,petServices,petProducts} from './data/data'
import ErrorPage from './pages/errorPage';

export const AddContext = createContext();


function App() {

  const [cartItems, setCartItems]=useState([]);

  function onAdd(product){
      const exist = cartItems.find(x=>x.name === product.name);

      if(exist){
          setCartItems(cartItems.map(x=>x.name === product.name ? {...exist, quantity: exist.quantity+1}: x));
      }
      else{
          setCartItems([...cartItems,{...product,quantity:1}]);
      }
  }

  function onRemove(product) {
      // for(var i=0;i<cartItems.length;i++){
      //   if(cartItems[i].name ===product.name){
      //     setCartItems(cartItems.splice(i,1)); 
      //     console.log(cartItems);
      //   }
      // }
      const newCartItems = cartItems.filter(cartItem => {return cartItem.name !== product.name})
      setCartItems(newCartItems);
  }
  return (
    <>
    <AddContext.Provider value={cartItems}>
      <Routes>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>

          <Route path="/pet" element={<Pet/>}/>
          <Route path="/pet/:id" element={<PetProduct onAdd={onAdd} data={pets}/>}/>

          <Route path="/petFood" element={<Category href="petFood" name="Thức ăn cho thú cưng" data={petFoods}/>}/>
          <Route path="/petFood/:id" element={<PetProduct onAdd={onAdd} data={petFoods}/>}/>
          
          <Route path="/petService" element={<Category href="petService" name="Dịch vụ" data={petServices}/>}/>
          <Route path="/petService/:id" element={<PetProduct onAdd={onAdd} data={petServices}/>}/>

          <Route path="/petProduct" element={<Category href="petProduct" name="Sản phẩm cho thú cưng" data={petProducts}/>}/>
          <Route path="/petProduct/:id" element={<PetProduct onAdd={onAdd} data={petProducts}/>}/>


          {/* <Route path="/care" element={<Care/>}/> */}
          <Route path="/cart" element={<Cart onRemove={onRemove}/>}/>
          {/* <Route path="/product/:id" element={<PetProduct/>}/> */}



          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/" element={<Home/>}/>


      </Routes>
    </AddContext.Provider>
    </>
    
  );
}

export default App;
