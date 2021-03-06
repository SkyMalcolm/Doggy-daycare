import './dogs.css';
import dogpaw from '../img/dogpaw.png';
import { useEffect, useState } from 'react';
import { HashRouter, Link, useNavigate } from 'react-router-dom';
import {useHistory} from "react-router-dom"


const Dogs = ({setDog}) => {    
   

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

        <Link to={"/info"}>
        <div className='dogs' key={dog.chipNumber} onClick={() => setDog(dog)}> 
            <img src={dog.img}/>
            <h3>{dog.name}</h3>
            </div>
        </Link>

            )
        
        })
    
    return (
        <div>
        <div className='container'>
            <div className='image'>
                <img src={dogpaw}/>
            </div>
            <div className='text'>
                <h3>FourPaws</h3>
            </div>
        </div>
        {mapping}
        </div>
        
    )
}

export default Dogs;