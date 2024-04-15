import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
const DefaultLayout = () => {
	return (
		<>
			{/* <div className="w-full h-full flex flex-col"> */}
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
			{/* </div> */}
		</>
	);
};

export default DefaultLayout;
