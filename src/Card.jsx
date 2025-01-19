import kashmir from './assets/kashmir.jpg'
import dubai from './assets/dubai.jpg'
import france from './assets/france.jpg'
import andman from './assets/andman.jpg'
import indonesia from './assets/indonesia.jpg'
import italy from './assets/italy.jpg'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import './Card.css'
import { useNavigate } from 'react-router-dom'
const Cards = () =>{

    let nav = useNavigate()
    function bookit()
    {
        nav('/book')
    }

    return(
        <>
         <img className='plogo'   /> 
         <div className='h1'><h1>Locations</h1></div>
        <div className="cards1">
            <div className='card1'>
                
                <img src={kashmir} />
                <hr />
                <h1>India</h1>
                <h2>Kashmir</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={dubai} />
                <hr />
                <h1>United Arab Emirates</h1>
                <h2>Dubai</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={france} />
                <hr />
                <h1>France</h1>
                <h2>Paris</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
        </div>



        {/* <img  className="flogo" src={flogo} /> */}
        <div className="cards1">
            <div className='card1'>
                <img src={andman} />
                <hr />
                <h1>Andaman & Nicobar</h1>
                <h2>Port Blair</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={indonesia} />
                <hr />
                <h1>Indonesia</h1>
                <h2>Bali</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={italy} />
                <hr />
                <h1>Italy</h1>
                <h2>Rome</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
        </div>


        {/* <img  className="llogo" src={lambo} /> */}
        <div className='h'><h1>Packages</h1></div>
        <div className="cards1">
            <div className='card1'>
                <img src={p1} />
                <hr />
                <h1>Silver Package</h1>
                <h2>3 Star Hotel</h2>
                <h2>4 lakh</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={p2} />
                <hr />
                <h1>Gold</h1>
                <h2>5 Star Hotel</h2>
                <h2>8 lakh</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
            <div className='card1'>
                <img src={p3} />
                <hr />
                <h1>Platinum</h1>
                <h2>7 Star Hotel</h2>
                <h2>10 lakh</h2>
                <hr />
                <button onClick={bookit}>Book Now</button>
            </div>
        </div>
        </>
    )
}

export default Cards