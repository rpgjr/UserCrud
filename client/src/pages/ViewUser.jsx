import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {
	const [user, setUser] = useState({
		id: null,
		name: '',
		username: '',
		email: '',
		phone: '',
		userType: '',
		position: '',
		address: '',
		dateCreated: null,
	});

	const { id } = useParams();

	const getUser = async () => {
		let endpoint = 'http://localhost:8080/user/';

		endpoint += id;

		await axios.get(endpoint).then((response) => {
			setUser(response.data);
		});
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			<div className='flex justify-between items-center mb-2'>
				<p className='text-2xl font-bold'>View User</p>
			</div>
			<div className='rounded-box border border-base-content/5 p-5'>
				<form
					action=''
					className='grid grid-cols-12 gap-3'
					noValidate
					autoComplete='off'
				>
					<fieldset className='fieldset col-span-8'>
						<legend className='fieldset-legend'>Email</legend>
						<input
							type='text'
							className='input w-full'
							value={user.email}
              readOnly='true'
						/>
					</fieldset>

					<fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Name</legend>
						<input
							type='text'
							className='input w-full'
							value={user.name}
              readOnly='true'
						/>
					</fieldset>

					<fieldset className='fieldset col-span-3'>
						<legend className='fieldset-legend'>Username</legend>
						<input
							type='text'
							className='input w-full'
							value={user.username}
              readOnly='true'
						/>
					</fieldset>

					<fieldset className='fieldset col-span-3'>
						<legend className='fieldset-legend'>Phone</legend>
						<input
							type='text'
							className='input w-full'
							value={user.phone}
              readOnly='true'
						/>
					</fieldset>

					<fieldset className='fieldset col-span-3'>
            <legend className='fieldset-legend'>User Type</legend>
            <input
              type='text'
              className='input w-full'
              value={user.userType}
              readOnly='true'
            />
					</fieldset>

					<fieldset className='fieldset col-span-3'>
            <legend className='fieldset-legend'>Position</legend>
            <input
              type='text'
              className='input w-full'
              value={user.position}
              readOnly='true'
            />
					</fieldset>

					<fieldset className='fieldset col-span-12'>
						<legend className='fieldset-legend'>Address</legend>
						<input
							type='text'
							className='input w-full'
							value={user.address}
              readOnly='true'
						/>
					</fieldset>

					<div className='col-span-12 flex justify-center gap-1'>
						<Link to={`/update/${id}`} className='btn btn-success'>
							Go to Update
						</Link>
						<Link to='/' className='btn btn-soft btn-primary'>
							Cancel
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default ViewUser;
