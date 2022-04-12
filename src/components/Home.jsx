import './home.css';
import { useNavigate } from "react-router-dom";
import dogpaw from '../img/dogpaw.png';
import dog_background from '../img/dog_background.jpg'
import dogcare from '../img/dogcare.jpg';

const Home = () => {
    return (
        <div className='main'>
        <header className='showcase'>
            <h1>Welcome to FourPaws</h1>
            <h3>A safe place for your dog </h3>
            <button className='button'>Read More</button>
        </header>
        <section className='section-a'>
            <p1>We at FourPaws offer you the finest and most professional care of your best friend while you
                are away on other matters! We strive to to make your dog feel safe and comfortable while staying with us
                and therefore we offer dog trims, walks in the forest which lies just behind our premises and relaxing
                dog massages.
            </p1>
        </section>

        <section className='section-b'>
           <div className='second-image'></div>

        </section>

        <section className='section-c'>
            <div className='box-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel massa non elit blandit varius. Nam condimentum tempor odio, vitae facilisis massa vehicula at. Nunc ut sodales velit. Cras lobortis nec sem et feugiat. Etiam faucibus dignissim eros, at malesuada metus hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut nulla ut ligula dapibus porttitor vitae sed turpis. Duis metus diam, dignissim in nisi ac, molestie tempus arcu. In mollis pretium enim et iaculis. Nunc a faucibus nisl, eget tincidunt urna. In hac habitasse platea dictumst. Sed bibendum diam ut dapibus tempus.
            </div>

            <div className='box-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel massa non elit blandit varius. Nam condimentum tempor odio, vitae facilisis massa vehicula at. Nunc ut sodales velit. Cras lobortis nec sem et feugiat. Etiam faucibus dignissim eros, at malesuada metus hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut nulla ut ligula dapibus porttitor vitae sed turpis. Duis metus diam, dignissim in nisi ac, molestie tempus arcu. In mollis pretium enim et iaculis. Nunc a faucibus nisl, eget tincidunt urna. In hac habitasse platea dictumst. Sed bibendum diam ut dapibus tempus.
            </div>

            <div className='box-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel massa non elit blandit varius. Nam condimentum tempor odio, vitae facilisis massa vehicula at. Nunc ut sodales velit. Cras lobortis nec sem et feugiat. Etiam faucibus dignissim eros, at malesuada metus hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ut nulla ut ligula dapibus porttitor vitae sed turpis. Duis metus diam, dignissim in nisi ac, molestie tempus arcu. In mollis pretium enim et iaculis. Nunc a faucibus nisl, eget tincidunt urna. In hac habitasse platea dictumst. Sed bibendum diam ut dapibus tempus.
            </div>
        </section>



        </div>

        


        


        

    )



        
        // <div className='container'>
        //     <div className='image'>
        //     <img src={dogpaw} alt="dog paw"></img>  
        //     </div>
        //     <div className='text'>
        //     <h1>FourPaws</h1>
                
        //     </div>

        //     <div className='button'>
        //     <button onClick={() => navigate("/dogs")}>Our registrered dogs</button> 
        //     </div>
            
        // </div>

        

        


    
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
    //)
}

export default Home;

