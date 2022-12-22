import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import image from '../assets/images/back.png';
import toast from 'react-hot-toast';


const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            toast.success('Login Successfully.....');
            navigate('/gameshome');

        })
        .catch(error => {console.error(error);
          toast.error(error.message);
        })
    }

    return (
      <div className='flex justify-center mt-8'>
      <div className='md:w-96 w-full md:h-[600px] h-fit'>
      <Link to='/'><img className='w-8 ml-8' src={image} alt="" /></Link>
      <p className='ml-8 mt-4 font-semibold'>Login</p>
        <h1 className='ml-8 text-3xl font-bold'>Please enter your <br /> details</h1>

      <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Type your email here" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Type your password here" className="input input-bordered mb-10" />
                        </div>
                         <button className='hidden bg-[#EB5757] h-[74px] w-full rounded-lg text-white text-sm'>Enter correct details.</button>

                        <div className="form-control mt-2">
                            <input className="bg-[#F2C94C] h-14 w-full mt-20 rounded-lg text-white font-semibold text-lg" type="submit" value="Login" />
                        </div>
                    </form>
      </div>
     </div>
     
    );
};

export default Login;