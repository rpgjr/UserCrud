import React from 'react';
import { Link } from 'react-router-dom';

const ViewUser = () => {
	return (
		<>
			<div className='flex justify-between items-center mb-2'>
				<p className='text-2xl font-bold'>View User</p>
			</div>
			<div className='rounded-box border border-base-content/5 p-5'>
				<form action='' className='grid grid-cols-12 gap-3'>
					<fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Email</legend>
						<input
							type='text'
							className='input w-full'
              readOnly='true'
						/>
					</fieldset>

          <fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Username</legend>
						<input
							type='text'
							className='input w-full'
              readOnly='true'
						/>
					</fieldset>

          <fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Name</legend>
						<input
							type='text'
							className='input w-full'
              readOnly='true'
						/>
					</fieldset>

          <div className='col-span-12 flex justify-center gap-1'>
            <Link to='/update' className='btn btn-success'>Update</Link>
            <Link to='/' className='btn btn-soft btn-primary'>Cancel</Link>
          </div>
				</form>
			</div>
		</>
	);
};

export default ViewUser;
