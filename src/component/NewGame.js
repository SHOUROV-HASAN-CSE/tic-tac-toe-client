import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/images/back.png';

const NewGame = () => {

  const navigate = useNavigate();

const handleStartGame = event =>{
  event.preventDefault();
  navigate('/yourgame');
};

  return (
    <div className='flex justify-center mt-8'>
    <div className='md:w-96 w-full md:h-[600px] h-fit'>
    <Link to='/gameshome'><img className='w-8 ml-8' src={image} alt="" /></Link>
      <h1 className='ml-8 mt-6 font-bold'>Start a new game</h1>
     <h2 className='text-[28px] font-bold ml-8 my-2'>Whom do you want <br /> to play with?</h2>

     <form onSubmit={handleStartGame} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type your email here" className="input input-bordered" required/>
                        </div>
                       
                        <div className="form-control mt-6">
                          <input className="bg-[#F2C94C] h-14 w-full rounded-lg text-white font-semibold text-lg mt-48" type="submit" value="Start a new game"/>
                        </div>
                    </form>
    </div>
   </div>
  );
};

export default NewGame;