import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/5.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 w-1/3">
                            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                            <p className="">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                          <div className="">   
                          <button className="btn btn-error text-white mr-5">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                          </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="absolute flex items-center h-full left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 w-1/3">
                            <h2 className="text-6xl font-bold">Service Details</h2>
                        </div>
                    </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="absolute flex items-center h-full left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 w-1/3">
                            <h2 className="text-6xl font-bold">Check Out</h2>
                        </div>
                    </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full rounded-xl" />
                     <div className="absolute flex items-center h-full left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className="text-white space-y-7 pl-12 w-1/3">
                            <h2 className="text-6xl font-bold">Add New Service</h2>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;