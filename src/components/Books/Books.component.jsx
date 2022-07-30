/** @format */

import { React, useState, useEffect } from 'react';
import Book from '../Book/Book.component.jsx';

const Books = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [books, setBooks] = useState([]);
	// get books
	const getBooks = async () => {
		const res = await fetch('http://localhost:5000/books');
		const booksData = await res.json();
		// console.log(booksData.results.books);
		setBooks(booksData);
	};

	useEffect(() => {
		getBooks();
	}, []);
	return (
		<div>
			<h1 className='font-bold text-center text-4xl py-10'>Bookist</h1>
			<input
				className='text-center my-10 w-200'
				type='text'
				placeholder='Search'
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
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
						return <Book key={book.primary_isbn10} book={book} />;
					})}
			</section>
		</div>
	);
};

export default Books;
