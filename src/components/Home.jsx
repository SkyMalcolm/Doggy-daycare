import './home.css';
import { useNavigate } from "react-router-dom";
import dogpaw from '../img/dogpaw.png';

const Home = () => {
    const navigate = useNavigate();
 
    return (
        
        <div className='container'>
            <div className='image'>
            <img src={dogpaw} alt="dog paw"></img>  
            </div>
            <div className='text'>
            <h1>FourPaws</h1>
                
            </div>

            <div className='button'>
            <button onClick={() => navigate("/dogs")}>Our registrered dogs</button> 
            </div>
            
        </div>

        

        


    
    // <div className='container'>
    //     <header className="home-header">
    //     <img className="home-img"src={dogpaw} alt="dog paw"></img>
    //     <h1>FourPaws</h1>
    //     <h2>We are a dog daycare facility who will take care of your dog with perfect precision</h2>
    //     </header>

    //     <p>Are you at work, and don't have anyone to watch your best friend? Dont worry, we will do it for you!
    //     We have taken care of dogs and made them feel safe while you are out on your business for 20 years, and you can check up on them
    //     live right here on our WebbApp customized for you and your dogs safety!</p>

    // <div className='buttons'>
    //     <button onClick={() => navigate("/dogs")}>Our registrered dogs</button>
    //         </div>
    //     </div>
    )
}

export default Home;

