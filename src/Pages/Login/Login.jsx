import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginsvg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };

                //get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => console.log(error))
    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center  w-1/2 mr-12">

                    <img src={loginsvg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center py-4'>New to Car Doctors? <Link className='text-[#FF3811] font-bold' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;