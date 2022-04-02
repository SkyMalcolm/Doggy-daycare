import './home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
 
    return (
    <div className='home'>
        <header className="App-header">
        <h1>Welcome to Doggy Daycare!</h1>
        <h2>We are a dog daycare facility who will take care of your dog with perfect precision</h2>
        </header>

        <p>Are you at work, and don't have anyone to watch your best friend? Dont worry, we will do it for you!
        We have taken care of dogs and made them feel safe while you are out on your business for 20 years, and you can check up on them
        live right here on our WebbApp customized for you and your dogs safety!</p>

    <div className='buttons'>
        <button onClick={() => navigate("/dogs")}>Our registrered dogs</button>
            </div>
        </div>
    )
}

export default Home;

