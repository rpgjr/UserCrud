import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className='navbar bg-secondary text-neutral-content'>
				<Link to='/' className='btn btn-ghost text-xl'>UserCrud</Link>
			</div>
      <div className='p-10'>
        <Outlet />
      </div>
		</>
	);
};

export default Navbar;
