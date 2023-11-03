import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

 
    useEffect(() => {
        axios.get(url, {withCredentials:  true})
        .then(res => {
            setBookings(res.data)
        })
     

    }, [url]);

    

    return (
        <div>
            <h2 className="text-5xl"> Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Services</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id}
                            booking={booking}>
                                {/* handleDelete={handleDelete} */}
                                {/* handleConfirm={handleConfirm} */}
                            </BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;