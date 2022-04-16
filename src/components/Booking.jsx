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


        // <form>
        //     <div className="elem-group">
        //     <label for="name">Your Name</label>
        // <input type="text" id="name" name="visitor_name" placeholder="John Doe" required/>
        //     </div>
        //     <div class="elem-group">
        //         <label for="email">Your E-mail</label>
        //         <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required/>
        //     </div>
        //     <div class="elem-group">
        //         <label for="phone">Your Phone</label>
        //         <input type="tel" id="phone" name="visitor_phone" placeholder="+467-300-000-00" required/>
        //     </div>
        //     <div class="elem-group inlined">
        //         <label for="dogs">Dogs</label>
        //         <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required/>
        //     </div>
        //     <div class="elem-group inlined">
        //         <label for="checkin-date">Check-in Date</label>
        //         <input type="date" id="checkin-date" name="checkin" required/>
        //     </div>
        //     <div class="elem-group inlined">
        //         <label for="checkout-date">Check-out Date</label>
        //         <input type="date" id="checkout-date" name="checkout" required/>
        //     </div>
            
        //     <div class="elem-group">
        //         <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
        //     </div>
        //         <Link to="/confirmation" className='button'>Submit booking request </Link>
        //     </form>
    )
}

export default Booking;