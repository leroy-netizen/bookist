/** @format */
import { useState } from 'react';

const AddBook = () => {
	const [book_image, setBook_image] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [author, setAuthor] = useState('');
	const [primary_isbn10, setPrimary_isbn10] = useState('');
	const [publisher, setPublisher] = useState('');
	const [amznLink, setAmznLink] = useState('');
	const [appleLink, setAppleLink] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		const book = {
			book_image,
			title,
			description,
			author,
			primary_isbn10,
			publisher,
			amznLink,
			appleLink,
		};
		setIsLoading(true);
		// console.log(book);
		fetch('https://root-classy-raccoon.glitch.me/books', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(book),
		}).then(() => {
			console.log('new book added');
			setIsLoading(false);
		});
	};
	return (
		<div className='flex flex-col'>
			<h2 className='flex m-auto text-3xl'>Add a new Book</h2>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label className='font-bold font-lg m-auto'>Image url</label>
				<input
					type='text'
					required
					value={book_image}
					onChange={(e) => setBook_image(e.target.value)}
					className='h-10 m-auto'
				/>
				<label className='font-bold font-lg m-auto'>Book Title</label>
				<input
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className='h-10 m-auto'
				/>
				<label className='font-bold font-lg m-auto'>Book Description</label>
				<input
					type='text'
					required
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='h-10 m-auto'
				/>
				<label className='font-bold font-lg m-auto'>Author</label>
				<input
					type='text'
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					className='h-10 m-auto'
				/>
				<label className='font-bold font-lg m-auto'>primary_isbn10</label>
				<input
					type='text'
					required
					value={primary_isbn10}
					onChange={(e) => setPrimary_isbn10(e.target.value)}
					className='h-10 m-auto'
				/>
				<label className='font-bold font-lg m-auto'>Publisher</label>
				<input
					type='text'
					required
					vlaue={publisher}
					onChange={(e) => setPublisher(e.target.value)}
					className='h-10 m-auto'
				/>
				<label className='font-bold font-lg m-auto'>Amazon Link</label>
				<input
					type='text'
					required
					value={amznLink}
					onChange={(e) => setAmznLink(e.target.value)}
					className='h-10 m-auto'
				/>
				<label className='font-bold font-lg m-auto'>Apple Link</label>
				<input
					type='text'
					required
					value={appleLink}
					onChange={(e) => setAppleLink(e.target.value)}
					className='h-10 m-auto mb-10'
				/>
				{!isLoading && (
					<button className='bg-red-200 w-1/4 h-10 m-auto'>Add Book</button>
				)}
				{isLoading && (
					<button disabled className='bg-red-200 w-1/4 h-10 m-auto'>
						Adding book ...{' '}
					</button>
				)}
			</form>
		</div>
	);
};

export default AddBook;
