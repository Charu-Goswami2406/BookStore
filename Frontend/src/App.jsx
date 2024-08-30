import React from 'react'
import Home from './home/Home';
import { Route ,Routes} from "react-router-dom";
import Explores from './explore/Explores';
import Signup from './components/Signup';
import Contacts from './contactus/Contacts';
import Abouts from './about/Abouts';

function App() {
  return  (
  <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/explore" element= {<Explores/>}/>
      <Route path="/signup" element= {<Signup/>}/>
      <Route path="/contact" element = {<Contacts/>}/>
      <Route path ="/about" element = {<Abouts/>}/>
    </Routes>
    </div>
  </>
  );
}

export default App;
