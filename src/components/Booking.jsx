import { Link } from 'react-router-dom';
import './booking.css';

const Booking = () => {
    return(
        <form>
            <div className='formInfo'>
            <label for="name">Your Name</label>
                <input type="text" placeholder='Sven Eriksson'/>
                <label for="email">Your E-mail</label>
                <input type="email" placeholder='sven.eriksson@gmail.com'/>
                <label for="phone">Your Phone</label>
                <input type="number" placeholder='+4670999999999'/>
                <label for="dogs">Dogs</label>
                <input type="number" placeholder='Dogs'/>
                <label for="checkin-date">Check-in Date</label>
                <input type="date" id="checkin-date" name="checkin" required/>
                <label for="checkout-date">Check-out Date</label>
                <input type="date" id="checkout-date" name="checkout" required/>
            </div>
                <div className='verification'>
                <Link to="/confirmation" className='sendButton'>Send Booking</Link>
            </div>
        </form>
    )
}

export default Booking;