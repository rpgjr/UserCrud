import React from 'react';

const DeletePromp = () => {
	return (
		<>
			<dialog id='deletePrompt' className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>Delete User</h3>
					<p className='py-4'>
						Are you sure you want to delete this user?
					</p>
					<div className='modal-action'>
						<form method='dialog' className='flex gap-1'>
              <button className='btn btn-error'>Delete</button>
							<button className='btn btn-soft btn-primary'>Cancel</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default DeletePromp;
