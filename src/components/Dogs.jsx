import './dogs.css';
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
        <div key={dog.chipNumber} onClick={() => setDog(dog)}> 
        <Link to={"/info"}>
            <div className='container'>
                <div className='image'>
                <img src={dog.img}/>
                </div>
                <div className='text'>
                <h3>Name: {dog.name}</h3>
                <p>Sex: {dog.sex}</p>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age}</p>
                </div>
            </div>
        </Link>
        </div>
            )
        
        })
    
    return (
        <div>     
        {mapping}
        </div>
    )
}

export default Dogs;