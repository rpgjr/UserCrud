import React from 'react'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
  return (
    <>
			<div className='flex justify-between items-center mb-2'>
				<p className='text-2xl font-bold'>Update User</p>
			</div>
			<div className='rounded-box border border-base-content/5 p-5'>
				<form action='' className='grid grid-cols-12 gap-3'>
					<fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Email</legend>
						<input
							type='text'
							className='input w-full'
						/>
					</fieldset>

          <fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Username</legend>
						<input
							type='text'
							className='input w-full'
						/>
					</fieldset>

          <fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Name</legend>
						<input
							type='text'
							className='input w-full'
						/>
					</fieldset>

          <div className='col-span-12 flex justify-center gap-1'>
            <button className='btn btn-success'>Save</button>
            <Link to='/' className='btn btn-soft btn-primary'>Cancel</Link>
          </div>
				</form>
			</div>
		</>
  )
}

export default UpdateUser