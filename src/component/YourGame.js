import React from 'react';
import { Link } from 'react-router-dom';

const YourGame = () => {
  return (
    <div className='flex justify-center mt-8'>
    <div className='md:w-96 w-full md:h-[600px] h-fit'>
    <h1 className='md:ml-8 my-2 text-3xl font-bold'>Your Games</h1>

    <div className="card w-full bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">Game with Tanmay</h2>
    <p className='text-sm'>Tanmay just made their move! It’s your turn to play now.</p>
    <p className='text-xs mt-2'>9th June 2022, 3:15pm</p>
    <Link to='/gameplay'>
    <div className="card-actions">
      <button className="bg-[#F2C94C] h-14 w-full rounded-lg mt-6 text-white font-semibold text-lg">Play!</button>
    </div>
    </Link>
  </div>
</div>


    <div className="card w-full mt-6 bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">Game with Harsh</h2>
    <p className='text-sm'>You’ve made your move! Waiting for them.</p>
    <p className='text-xs mt-2'>9th June 2022, 2:15pm</p>
    <div className="card-actions">
      <button className="bg-[#F2C94C] h-14 w-full rounded-lg mt-6 text-white font-semibold text-lg">View game</button>
    </div>
  </div>
</div>
    <div className="card w-full mt-6 bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">Game with Mithilesh</h2>
    <p className='text-sm'>You won!</p>
    <p className='text-xs mt-2'>9th June 2022, 12:15pm</p>
    <div className="card-actions">
      <button className="bg-[#F2C94C] h-14 w-full rounded-lg mt-6 text-white font-semibold text-lg">View game</button>
    </div>
  </div>
</div>
    <div className="card w-full mt-6 bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">Game with Shreya</h2>
    <p className='text-sm'>It’s a Draw!</p>
    <p className='text-xs mt-2'>9th June 2022, 09:15am</p>
    <div className="card-actions">
      <button className="bg-[#F2C94C] h-14 w-full rounded-lg mt-6 text-white font-semibold text-lg">View game</button>
    </div>
  </div>
</div>
    <div className="card w-full mt-6 bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">Game with Aashna</h2>
    <p className='text-sm'>It’s a Draw!</p>
    <p className='text-xs mt-2'>9th June 2022, 08:15am</p>
    <div className="card-actions">
      <button className="bg-[#F2C94C] h-14 w-full rounded-lg mt-6 text-white font-semibold text-lg">View game</button>
    </div>
  </div>
</div>




    </div>
   </div>
  );
};

export default YourGame;