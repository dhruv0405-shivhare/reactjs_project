import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dash.css'; 

const Dashboard = () => {
    const [cars, setCars] = useState([]);

    const delcar = (id) => {
        axios.delete(`http://localhost:3000/Details/${id}`)
            .then(response => {
                alert("Booking Cancelled successfully");
            })
          
    };

    useEffect(() => {
        axios.get('http://localhost:3000/Details')
            .then(r => {
              console.log(r.data);
              
                setCars(r.data);
            })
    }, []);

    return (
      <div className='body4'>
            <div className="dashcontainer">
                <h2>Car Bookings</h2>
                {cars.length > 0 ? (
                    <table className="cartable">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Delivery Date</th>
                                <th>Address</th>
                                <th>Advance Pay</th>
                                <th>Model</th>
                                <th>Phone Number</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map((c, index) => (
                                <tr key={index}>
                                    <td>{c.name}</td>
                                    <td>{c.deliveryDate}</td>
                                    <td>{c.address}</td>
                                    <td>{c.advance} Rs</td>
                                    <td>{c.model}</td>
                                    <td>{c.number}</td>
                                    <td><button className='delbtn' onClick={() => delcar(c.id)}>Cancel Booking</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="nobookings">No bookings available.</p>
                )}
            </div>
        </div>    );
};

export default Dashboard;
