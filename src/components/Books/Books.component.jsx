/** @format */

import { React, useState, useEffect } from 'react';
import useFetch from '../../customHooks/useFetch.js';
import Book from '../Book/Book.component.jsx';
import { Link } from 'react-router-dom';
const Books = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const {
		data: books,
		isLoading,
		error,
	} = useFetch('https://root-classy-raccoon.glitch.me/books');
	// get books

	// extract fetch function

	return (
		<div>
			<h1 className='font-bold text-center text-4xl py-10'>Bookist</h1>
			<input
				className='text-center my-10 w-200'
				type='text'
				placeholder='Search'
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			{error && <h1 className='font-bold text-red-600 text-4xl'>{error}</h1>}
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<section className='grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{books
						.filter((book) => book.title.toLowerCase().includes(searchTerm))
						.map((book) => {
							const {
								author,
								book_image,
								buy_links,
								description,
								primary_isbn10,
								publisher,
								rank,
								title,
							} = book;
							return (
								<Link to={`/books/${book.primary_isbn10}`}>
									<Book key={book.primary_isbn10} book={book} />
								</Link>
							);
						})}
				</section>
			)}
		</div>
	);
};

export default Books;
