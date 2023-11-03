import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (

        <div className="m-5 ">
            <div className="card w-[364px] h-[389] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={img} alt="Shoes" className="rounded-xl w-[314px] h-[208px]" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between items-center text-[#FF3811]">
                        <p>Price: ${price}</p>
                       
                        <Link to={`/booking/${_id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>

    );
};

export default ServiceCard;