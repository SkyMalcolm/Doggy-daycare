
import './App.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from './Home';
import Dogs from './Dogs';
import Info from './Info';
import {useState} from 'react';

function App() {

  const [activeDog, setActiveDog] = useState(null);

  return (
    <div>
      
      <HashRouter>
      
        { <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dogs" element={<Dogs setDog={setActiveDog} activeDog={activeDog}/>} />
          <Route path="/info" element={<Info/>}/>
        </Routes> }
      </HashRouter>
    </div>
  );
}

export default App;
