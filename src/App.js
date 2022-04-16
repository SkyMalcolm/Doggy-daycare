
import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from './components/Home';
import Dogs from './components/Dogs';
import Info from './components/Info';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
import {useState} from 'react';

function App() {

  const [activeDog, setActiveDog] = useState(null);

  return (
      <HashRouter>
        { <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dogs" element={<Dogs setDog={setActiveDog}/>}/>
          <Route exact path="/info" element={<Info activeDog={activeDog}/>}/>
          <Route exact path="/booking" element={<Booking/>} />
          <Route exact path="/confirmation" element ={<Confirmation/>} />
        </Routes> }
      </HashRouter>

      
    
  );
}

export default App;
