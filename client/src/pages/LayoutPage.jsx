import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainPage from './MainPage';
import ViewUser from './ViewUser';
import UpdateUser from './UpdateUser';
import AddUser from './AddUser';

const LayoutPage = () => {
	return (
		<>
			<div>
				<div>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Navbar />}>
								<Route index element={<MainPage />} />
                <Route path='add' element={<AddUser />} />
								<Route path='view' element={<ViewUser />} />
                <Route path='update' element={<UpdateUser />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</>
	);
};

export default LayoutPage;
