import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/images/back.png';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';




const SignUp = () => {

    const navigate = useNavigate();
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            handleUpdateUserProfile(username, name);
            console.log(user);
            navigate('/');
        })
        .catch(error => {console.error(error);
        })
    

    const handleUpdateUserProfile = (username, name) => {
        const profile = {
            displayName: username,

        }
    
        updateUserProfile(profile)
            .then(() => {})
            .catch(error => console.error(error));
    }
}


    return (

      <div className='flex justify-center mt-8'>
      <div className='md:w-96 w-full md:h-[600px] h-fit'>
        <Link to='/'><img className='w-8 ml-8' src={image} alt="" /></Link>
        <p className='ml-8 font-semibold'>Create account</p>
        <h1 className='ml-8 text-3xl font-semibold'>Let’s get to know <br /> you better!</h1>
        
      <form onSubmit={handleSignUp} className="card-body">
                          <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type your name here" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" name='username' placeholder="Type your username here" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type your email here" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Type your password here" className="input input-bordered mb-4" required/>
                        </div>
                        <button className=' bg-[#6FCF97] h-[74px] w-full rounded-lg text-white text-sm'>Congratulations!!! Account created.</button>
                        <div className="form-control mt-6">
                            <input className="bg-[#F2C94C] h-14 w-full  rounded-lg text-white font-semibold text-lg" type="submit" value="Register"/>
                        </div>
                    </form>

      </div>
      </div>
    );
};

export default SignUp;