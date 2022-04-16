import './home.css';
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate;

    return (
        <div className='main'>
        <header className='showcase'>
            <h1>Welcome to FourPaws</h1>
            <h3>A safe place for your dog </h3>
            <Link to="/dogs" className='button'>Check out our dogs!</Link>
            <Link to="/booking" className='button'>Book an appointment</Link>
        </header>
        <section className='section-a'>
            <h3>We at FourPaws offer you the finest and most professional care of your best friend while you
                are away on other matters! We strive to to make your dog feel safe and comfortable while staying with us
                and therefore we offer dog trims, walks in the forest which lies just behind our premises and relaxing
                dog massages.
            </h3>
        </section>

        <section className='section-b'>
           <h3>Feel safe and comfortable knowing your dog is having a good time.
               Let your dog stay in home environments with us!</h3>
        </section>

        <section className='section-c'>
            <div className='box-1'>
                Our four-pawed friends also experience muscle ache and tension. We will massage your dog with highly experienced masseuses.
            </div>

            <div className='box-2'>
                If your dogs need clip and trimming, then we will provide it. With staff that has been cutting dog hair for many years we know what we are doing, and ofcourse we will always discuss the wanted results before starting.
            </div>

            <div className='box-3'>
                We always recommend that while your dog stays with us, we can have the pleasure of giving your dog a warm nice bath. You will no longer have hair in your drains and no more wrestling with an escaping dog!
            </div>
        </section>
        </div>
    )
}

export default Home;

