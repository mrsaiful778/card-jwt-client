import person from '../../../assets/images/about_us/person.jpg'
import perts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={perts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <p className='text-[#FF3811] text-[20px] font-bold'>About us</p>
                        <h1 className="text-5xl font-bold w-[376px]">We are qualified & of experience in this field</h1>
                        <p className="py-6 w-1/2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="py-1 w-1/2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-active bg-[#FF3811] text-[#FFF]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;