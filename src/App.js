import {Routes, Route} from 'react-router-dom';
import {useState,createContext} from 'react'
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



function App() {
  return (
    <>
      <Routes>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>

          <Route path="/pet" element={<Pet/>}/>
          <Route path="/pet/:id" element={<PetProduct data={pets}/>}/>

          <Route path="/petFood" element={<Category href="petFood" name="Thức ăn cho thú cưng" data={petFoods}/>}/>
          <Route path="/petFood/:id" element={<PetProduct data={petFoods}/>}/>
          
          <Route path="/petService" element={<Category href="petService" name="Dịch vụ" data={petServices}/>}/>
          <Route path="/petService/:id" element={<PetProduct data={petServices}/>}/>

          <Route path="/petProduct" element={<Category href="petProduct" name="Sản phẩm cho thú cưng" data={petProducts}/>}/>
          <Route path="/petProduct/:id" element={<PetProduct data={petProducts}/>}/>


          {/* <Route path="/care" element={<Care/>}/> */}
          <Route path="/cart" element={<Cart/>}/>
          {/* <Route path="/product/:id" element={<PetProduct/>}/> */}




          <Route path="/" element={<Home/>}/>


      </Routes>
    </>
    
  );
}

export default App;
