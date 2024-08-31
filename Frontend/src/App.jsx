import React from 'react'
import Home from './home/Home';
import { Navigate,Route ,Routes} from "react-router-dom";
import Explores from './explore/Explores';
import Signup from './components/Signup';
import Contacts from './contactus/Contacts';
import Abouts from './about/Abouts';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider'; 

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return  (
  <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/explore" element= {authUser?<Explores/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element= {<Signup/>}/>
      <Route path="/contact" element = {<Contacts/>}/>
      <Route path ="/about" element = {<Abouts/>}/>
    </Routes>
    <Toaster/>
    </div>
  </>
  );
}

export default App;
