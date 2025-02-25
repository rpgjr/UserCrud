import { Eye, Pencil, Plus, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeletePromp from './DeletePromp';
import axios from 'axios';

const UserTable = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		let endpoint = 'http://localhost:8080/user/all';
		await axios.get(endpoint).then((response) => {
			setUsers(response.data);
		});
	};

  const formatDate = ( dateCreated ) => {
    let newDate = new Date(dateCreated);
    let formattedDate = newDate.toISOString().split("T");

    return formattedDate[0];
  }

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<div className='flex justify-between items-center mb-2'>
				<p className='text-2xl font-bold'>Users Table</p>
				<Link to='/add' className='btn btn-secondary'>
					Add
					<Plus size={16} strokeWidth={2.5} />
				</Link>
			</div>
			<div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
				<table className='table'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
							<th>Type</th>
							<th>Date Created</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
							<td>Blue</td>
							<td>Blue</td>
							<td className='flex gap-1'>
								<Link to='/view' className='btn btn-info p-3'>
									<Eye size={20} />
								</Link>
								<Link to='/update' className='btn btn-success p-3'>
									<Pencil size={20} />
								</Link>
								<button
									className='btn btn-error p-3'
									onClick={() =>
										document.getElementById('deletePrompt').showModal()
									}
								>
									<Trash2 size={20} />
								</button>
								<DeletePromp />
							</td>
						</tr>
						{users.map((user, index) => (
							<tr key={user.id}>
								<th>{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.userType}</td>
								<td>{formatDate(user.dateCreated)}</td>
								<td className='flex gap-1'>
									<Link to={`/view/${user.id}`} className='btn btn-info p-3'>
										<Eye size={20} />
									</Link>
									<Link
										to={`/update/${user.id}`}
										className='btn btn-success p-3'
									>
										<Pencil size={20} />
									</Link>
									<button
										className='btn btn-error p-3'
										onClick={() =>
											document.getElementById('deletePrompt').showModal()
										}
									>
										<Trash2 size={20} />
									</button>
									<DeletePromp />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default UserTable;
