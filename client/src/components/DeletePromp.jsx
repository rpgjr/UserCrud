import axios from 'axios';
import React from 'react';

const DeletePromp = ({ user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8080/user/${user.id}`)
    .then(
      document.getElementById('deletePrompt').close()
    )
    .catch(err => console.log(err))
  }

	return (
		<>
			<dialog id='deletePrompt' className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>Delete User</h3>
					<p className='py-4'>
						Are you sure you want to delete <span className='font-bold'>{ user.username }</span> from the records?
					</p>
					<div className='modal-action'>
						<form method='dialog' className='flex gap-1' onSubmit={handleSubmit} >
              <button type='submit' className='btn btn-error'>Delete</button>
							<button className='btn btn-soft btn-primary'>Cancel</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default DeletePromp;
