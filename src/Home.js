import './App.css';
import Home from './components/Home';
import React from 'react';
import { useNavigate } from "react-router-dom";

const HomeView = (props) => {
    const navigate = useNavigate();

    return (
        <div className="App">
          
          <Home/>
    
    
    
        </div>
      );
    }

    export default HomeView;
