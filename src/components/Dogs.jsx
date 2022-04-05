import './dogs.css';
import { useEffect, useState } from 'react';
import { HashRouter, useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';


const Dogs = ({setDog}) => {
    const navigate = useNavigate;
   

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://api.jsonbin.io/b/624bfed4d96a510f029144cc');
        const responseData = await response.json();
        setData(responseData);
    };

    useEffect(() => {
        fetchData()
    }, []);

    const mapping = data.map(dog => {
    
            return (
                
                <div key={dog.chipNumber} onClick={() => setDog(dog)}>

                <img src={dog.img} /> 
                <h1 >{dog.name} </h1>
                </div>
                
            )
        
        })
    
    return (
        <div>
        <h1>Here is our dogs!</h1>     
        {mapping}
        </div>
    )
}

export default Dogs;