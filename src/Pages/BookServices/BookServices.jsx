import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const BookServices = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price,

        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('services book successfully')
                }
            })
    }

    return (
        <div>
            <h2 className="text-center text-2xl mb-5">Book Service: {title} </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="lable">
                            <span className="lable-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="lable">
                            <span className="lable-text">Service date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="lable">
                            <span className="lable-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="lable">
                            <span className="lable-text">Service charge</span>
                        </label>
                        <input type="text" defaultValue={"$" + price} placeholder="Due amount" className="input input-bordered" required />
                    </div>
                </div>
                <label className="lable">
                    <span className="lable-text">Details</span>
                </label>
                <textarea type="text" name="message" placeholder="Your Message" className="mt-5 textarea textarea-bordered textarea-md w-full " ></textarea>
                {/* lg */}
                <div className="form-control mt-6">
                    <input className="btn btn-block bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookServices;