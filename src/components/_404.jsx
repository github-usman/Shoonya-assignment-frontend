import React from 'react';
import { Link } from 'react-router-dom';

const _404 = () => {
  return (
    <div className="flex flex-col bg-pearl  h-[100vh] w-[100%] justify-center items-center text-center gap-5">
        <h2 className='text-[60px]'>404 Page Not Found</h2>
        <h5 className='text-[28px]'>
          The page you are looking for is unavailable. It might have been
          removed, had its name changed or moved.
        </h5>

          <Link to={"/"} className='bg-spaceCadet p-[8px] px-[26px] text-white rounded-sm font-bold'>Home</Link>

    </div>
  );
};

export default _404;
