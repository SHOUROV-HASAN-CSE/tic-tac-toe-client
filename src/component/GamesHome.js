import React from 'react';
import { Link } from 'react-router-dom';

const GamesHome = () => {
  return (
    <div className='flex justify-center mt-8'>
    <div className='md:w-96 w-full md:h-[600px] h-fit'>
      <h1 className='ml-8 text-3xl font-bold'>Your Games</h1>
     <div className='font-[Bilbo] mt-28 text-center'>
     <h2 className='text-7xl mb-8'>No Games</h2>
     <h2 className='text-7xl'>Found</h2>
     </div>
     <Link to='/newgame'><button className='bg-[#F2C94C] h-14 w-full rounded-lg mt-16 text-white font-semibold text-lg'>Start a new game</button></Link>
    </div>
   </div>
  );
};

export default GamesHome;