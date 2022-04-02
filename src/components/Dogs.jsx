import './dogs.css';
import { useNavigate } from "react-router-dom";

const Dogs = () => {
    const navigate = useNavigate();

    return (
        <div>
        <h1>Here are our dogs!</h1>
        <div className='buttons'>
        <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
        </div>
    )
}

export default Dogs;