/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.styles.css';

const Navbar = () => {
	return (
		<div className='nav flex justify-between items-center bg-gray-200 '>
			<div className='logo'>
				<h3 className='m-10 text-3xl font-bold'>Bookist</h3>
			</div>
			<ul className='flex justify-center'>
				<li className='navItems m-10 font-bold cursor-pointer text-underline'>
					<Link to='/' />
					Home
				</li>
				<li className='navItems m-10 font-bold cursor-pointer'>
					Reviews and Comments
				</li>
				<li className='navItems m-10 font-bold cursor-pointer'> Add A Book</li>
			</ul>
		</div>
	);
};

export default Navbar;
