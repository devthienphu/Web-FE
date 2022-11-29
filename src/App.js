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


function App() {
  return (
    <>
      <Routes>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pet" element={<Pet/>}/>
          <Route path="/care" element={<Care/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/category" element={<Category/>}/>



          <Route path="/" element={<Home/>}/>


      </Routes>
    </>
    
  );
}

export default App;
