/** @format */
import { useState } from 'react';

const AddBook = () => {
	const [imgUrl, setImgUrl] = useState('');
	const [title, setTitle] = useState('');
	const [bookDesc, setBookDesc] = useState('');
	const [author, setAuthor] = useState('');
	const [isbn, setIsbn] = useState('');
	const [publisher, setPublisher] = useState('');
	const [amznLink, setAmznLink] = useState('');
	const [appleLink, setAppleLink] = useState('');
	return (
		<div className='flex flex-col'>
			<h2 className='flex m-auto text-3xl'>Add a new Book</h2>
			<form className='flex flex-col'>
				<label className='font-bold font-lg m-auto'>Image url</label>
				<input type='text' required value={imgUrl} className='h-10 m-auto' />
				<label className='font-bold font-lg m-auto'>Book Title</label>
				<input type='text' required value={title} className='h-10 m-auto' />
				<label className='font-bold font-lg m-auto'>Book Description</label>
				<input type='text' required value={bookDesc} className='h-10 m-auto' />
				<label className='font-bold font-lg m-auto'>Author</label>
				<input type='text' required value={author} className='h-10 m-auto' />
				<label className='font-bold font-lg m-auto'>ISBN</label>
				<input type='text' required value={isbn} className='h-10 m-auto' />
				<label className='font-bold font-lg m-auto'>Publisher</label>
				<input type='text' required vlaue={publisher} className='h-10 m-auto' />
				<label className='font-bold font-lg m-auto'>Amazon Link</label>
				<input type='text' required value={amznLink} className='h-10 m-auto' />
				<label className='font-bold font-lg m-auto'>Apple Link</label>
				<input
					type='text'
					required
					value={appleLink}
					className='h-10 m-auto mb-10'
				/>
				<button className='bg-red-200 w-1/4 h-10 m-auto'>Add Book</button>
			</form>
		</div>
	);
};

export default AddBook;
