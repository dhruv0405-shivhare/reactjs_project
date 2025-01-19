import { Link, Outlet } from 'react-router-dom'
import './Nav.css'
import logo from './assets/logo.png'


const Nav = ()=>{
    return(
        <>
        <header>
          <nav className='nav'>
            <img src={logo} />
            <ul className="ul">

          <li><Link to={"/home"}>Home</Link></li>
          <li><Link to={"/location"}>Locations</Link></li>
          <li><Link to={"/package"}>Packages</Link></li>
          <li><Link to={"/dash"}>Bookings</Link></li>
          
      </ul>   
      <ul className='ul'>
      <li><Link to={"/signup"}>Sign Up</Link></li>
        <li><Link to={"/login"}>Login</Link></li></ul>       
          
          </nav>

        </header>
        </>
    )
}

const Footer = () =>{
return(
  <>

  
  <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>TRAVEL</h2>
          <p>One step to your dreams </p>
        </div>

        <div className="footer-section links">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> contact@travel.com</p>
          <p><strong>Phone:</strong> +91 001 001 0011</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      
      <div className="footer-bottom">
      <p>Copyright © 2025 Firstflight Travels All Rights Reserved.<hr />Website developed by: Dhruv</p>
      </div>
    </footer>
  </>
)
}

export { Nav , Footer }

