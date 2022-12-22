import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-center mt-8'>
     <div className='md:w-96 w-full md:h-[600px] h-fit'>
      <div className='font-[Bilbo] mt-28 text-center'>
      <h1 className='text-5xl'>async</h1>
      <h2 className='text-8xl'>tic tac</h2>
      <h2 className='text-8xl'>toe</h2>
      </div>
      <Link to='/login'><button className='bg-[#F2C94C] h-14 w-full rounded-lg mt-24 text-white font-semibold text-lg'>Login</button></Link>

      <Link to='/signup'><button className='bg-[#2F80ED] h-14 w-full rounded-lg mt-4 text-white font-semibold text-lg'>Register</button></Link>
     </div>
    </div>
  );
};

export default Home;