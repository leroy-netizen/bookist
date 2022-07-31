/** @format */
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
const BookDetails = () => {
	const { id } = useParams();
	const {
		isLoading,
		data: book,
		error,
	} = useFetch(`https://root-classy-raccoon.glitch.me/books/${id}`);
	// const [book, setBook] = useState('');
	// useEffect(() => {
	// 	fetch(`https://root-classy-raccoon.glitch.me/books/${id}`)
	// 		.then((r) => r.json())
	// 		.then((data) => setBook(data));
	// }, []);
	console.log(book);
	return (
		<div>
			{isLoading && <div> Loading ...</div>}
			{error && <div> {error}</div>}
		</div>
	);
};
export default BookDetails;
