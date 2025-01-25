import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Book.css'
import axios from 'axios';

const Book = () =>{
    let[jdata,setJdata] = useState([]);
    let navigate = useNavigate()
    let[data,setData] = useState({
        'name':"",
        'departureDate':"",
        'address':"",
        'advance':"",
        'package':"",
        'number':""
    })

    const hinput = (e) =>{
        const{name,value} = e.target;
        setData({...data,
            [name]:value
        })
    }

     const finalsubmit = (i) => {
        i.preventDefault();
        axios.post('http://localhost:3000/Details', data)
            .then(res => {
                alert("Your package is booked");
                navigate('/dash');
            });
    };

    useEffect(()=>{
        axios.get('http://localhost:3000/Details')
        .then(r=>{setJdata(r.data)
        })
    })
    return(
        <>
       <div className='bgimage'>


       

        <div className="form-container">
      <h2>Order Form</h2>
      <form onSubmit={finalsubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={data.name} onChange={hinput} required />
        
          <label htmlFor="departureDate">Departure Date:</label>
          <input type="date" name="departureDate" value={data.departureDate} onChange={hinput} required />

          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={data.address} onChange={hinput} required />

          <label htmlFor="pincode">Advance Pay:</label>
          <input type="text" name="advance" value={data.advance} onChange={hinput} required />

          <label htmlFor="country">Package:</label>
          <input type="text" name="package" value={data.package} onChange={hinput} required />

          <label htmlFor="number">Phone Number:</label>
          <input type="tel" name="number" value={data.number} onChange={hinput} required />

        <button className='btnn' type="submit">Submit</button>
      </form>
    </div>
    </div>
        </>
    )
}

export default Book