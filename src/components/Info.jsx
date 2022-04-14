import './info.css';
import dogpaw from '../img/dogpaw.png';

const Info = ({activeDog}) => {
    return(
        <div>
             <div className='container'>
                 <div className='image'>
                     <img src={dogpaw}/>
                 </div>
                 <div className='text'>
                     <h1>FourPaws</h1>
                 </div>
             </div>

             <div className='dog-container'>
                 <div className='dog-image'>
                     <img src={activeDog.img}/>
                 </div>
                 <div className='dog-info'>
                    
                    <h1>{activeDog.name}</h1>
                    <p>Age: {activeDog.age}</p>
                    <p>Sex: {activeDog.sex}</p>
                    <p>Breed: {activeDog.breed}</p>
                    <p className='owner-info'>Name of owner: {activeDog.owner.name}</p>
                    <p className='owner-info'>Last name of owner: {activeDog.owner.lastName}</p>
                    <p className='owner-info'>Phone number to owner: {activeDog.owner.phoneNumber}</p>
                 </div>
             </div>

             <div className='short-info'>
                 <li>Can live with other dogs: Yes</li>
                 <li>Works with cats: No</li>
                 <li>Can live with kids that are 10 and older</li>
                 <li>Which environment is the dog use to: Calmer areas</li>
                 <li>Active-levels: High</li>
             </div>
        </div>
        
    )
}

export default Info;