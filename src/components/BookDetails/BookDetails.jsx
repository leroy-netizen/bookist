/** @format */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
const BookDetails = () => {
	// const { id } = useParams();
	// const {
	// 	isLoading,
	// 	data: book,
	// 	error,
	// } = useFetch(`https://root-classy-raccoon.glitch.me/books/${id}`);
	useEffect(() => {
		fetch(`https://root-classy-raccoon.glitch.me/books/${id}`)
			.then((r) => r.json())
			.then((data) => console.log(data));
	}, []);
	// console.log(book);
	return (
		<div>{book}</div>
		// <div>
		// 	{isLoading && <h1>Loading ...</h1>}
		// 	{error && <div>{error}</div>}
		// 	{book && (
		// 		<div>
		// 			<p>{book.book_title}</p>
		// 		</div>
		// 	)}
		// 	{book &&
		// 		book.reviews.map((review) => (
		// 			<div key={review.id}>
		// 				<p>review.author</p>
		// 				<p>review.text</p>
		// 				<p>review.author</p>
		// 			</div>
		// 		))}
		// 	{console.log(book.Title)}

		// 	<h1> Book Details {id}</h1>
		// </div>
	);
};
export default BookDetails;
