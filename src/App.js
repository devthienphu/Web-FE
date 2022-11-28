import {Routes, Route} from 'react-router-dom';
import {useState,createContext} from 'react'
import './App.css';
import SignUp from './pages/signUp';
import SignInForm from './components/Login/signInForm';
import SignIn from './pages/signIn';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

function App() {
  return (
    <>
      <Routes>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>

          <Route path="/" element={<Home/>}/>


      </Routes>
    </>
    
  );
}

export default App;
