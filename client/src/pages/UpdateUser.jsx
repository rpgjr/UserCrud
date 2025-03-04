import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/user/${id}`, user)
    .then(navigate('/'))
    .catch(err => console.log(err))
  }

  useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			<div className='flex justify-between items-center mb-2'>
				<p className='text-2xl font-bold'>Update User</p>
			</div>
			<div className='rounded-box border border-base-content/5 p-5'>
				<form
					action=''
					className='grid grid-cols-12 gap-3'
					noValidate
					autoComplete='off'
          onSubmit={handleSubmit}
				>
					<fieldset className='fieldset col-span-8'>
						<legend className='fieldset-legend'>Email</legend>
						<input
							type='text'
							className='input w-full'
							name='email'
							onChange={handleChange}
							value={user.email}
						/>
					</fieldset>

					<fieldset className='fieldset col-span-4'>
						<legend className='fieldset-legend'>Name</legend>
						<input
							type='text'
							className='input w-full'
							name='name'
							onChange={handleChange}
							value={user.name}
						/>
					</fieldset>

					<fieldset className='fieldset col-span-3'>
						<legend className='fieldset-legend'>Username</legend>
						<input
							type='text'
							className='input w-full'
							name='username'
							onChange={handleChange}
							value={user.username}
						/>
					</fieldset>

					<fieldset className='fieldset col-span-3'>
						<legend className='fieldset-legend'>Phone</legend>
						<input
							type='text'
							className='input w-full'
							name='phone'
							onChange={handleChange}
							value={user.phone}
						/>
					</fieldset>

					<fieldset className='fieldset col-span-3'>
						<legend className='fieldset-legend'>User Type</legend>
						<select
							defaultValue='Type of User'
							className='select'
							name='userType'
							onChange={handleChange}
							value={user.userType}
						>
							<option hidden>Pick a user type</option>
							<option value='User'>User</option>
							<option value='Super Admin'>Super Admin</option>
							<option value='Temporary User'>Temporary User</option>
						</select>
					</fieldset>

					<fieldset className='fieldset col-span-3'>
						<legend className='fieldset-legend'>Position</legend>
						<select
							defaultValue='Position'
							className='select'
							name='position'
							onChange={handleChange}
							value={user.position}
						>
							<option hidden>Employee Title</option>
							<option value='Dev'>Dev</option>
							<option value='QA'>QA</option>
							<option value='Lead'>Lead</option>
							<option value='PM'>PM</option>
							<option value='Tester'>Tester</option>
						</select>
					</fieldset>

					<fieldset className='fieldset col-span-12'>
						<legend className='fieldset-legend'>Address</legend>
						<input
							type='text'
							className='input w-full'
							name='address'
							onChange={handleChange}
							value={user.address}
						/>
					</fieldset>

					<div className='col-span-12 flex justify-center gap-1'>
						<button type='submit' className='btn btn-success'>
							Update
						</button>
						<Link to='/' className='btn btn-soft btn-primary'>
							Cancel
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default UpdateUser;
