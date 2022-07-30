/** @format */

import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

const Book = ({ book }) => {
	const buyLinks = book.buy_links;
	return (
		<article className='bg-white px-15 py-10 mb-10 rounded-lg sm:px-5 hover:shadow-2xl'>
			<div>
				<img
					src={book.book_image}
					alt={book.book_title}
					className='block mx-auto w-1/2'
				/>
			</div>
			<div>
				<h3 className='font-bold my-2 text-2xl'> {book.title}</h3>
				<p className='mb-4'>{book.description}</p>
				<p>
					{' '}
					<span className='font-bold'>Author:</span>
					{book.author}
				</p>
			</div>
			<ul className='mb-4'>
				<li>
					<span className='font-bold'>ISBN</span> {'\u00a0'}{' '}
					{book.primary_isbn10}
				</li>
				<li>
					<span className='font-bold'>Publisher:</span> {book.publisher}
				</li>
				{/* <li>{book.price}</li> */}
			</ul>
			<ul>
				<p className='font-bold text-xl'>BUY NOW</p>
				{buyLinks.map((link) => {
					const { name, url } = link;
					return (
						<div key={name} className='bg-gray-50'>
							{/* <li>{name}</li> */}
							<a
								href={url}
								className='flex items-center ml-1'
								target='_blank'
								rel='noopenner noreferrer'
							>
								{name} <GoLinkExternal className='ml-1' />
							</a>
						</div>
					);
				})}
			</ul>
		</article>
	);
};

export default Book;
