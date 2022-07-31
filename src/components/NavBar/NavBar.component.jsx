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
				<li to='/' className=' m-10 font-bold cursor-pointer text-underline'>
					<Link to='/'>Home</Link>
				</li>
				<li className='navItems m-10 font-bold cursor-pointer'>
					<Link to='/addbook'>Add Book</Link>
				</li>
				<li className='navItems m-10 font-bold cursor-pointer'>
					<Link to='/login'>SignIn </Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
