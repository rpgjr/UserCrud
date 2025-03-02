import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className='navbar bg-secondary text-neutral-content'>
				<Link to='/' className='btn btn-ghost text-xl'>UserCrud</Link>
			</div>
      <div className='grid grid-cols-12 justify-center mt-10'>
        <div className='col-span-6 col-start-4'>
          <Outlet />
        </div>
      </div>
		</>
	);
};

export default Navbar;
