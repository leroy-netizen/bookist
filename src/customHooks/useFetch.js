/** @format */

import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const getBooks = async () => {
		try {
			const res = await fetch(url);
			if (!res.ok) {
				throw Error('could not get data for that resource!🚫');
			}
			console.log(res);
			const booksData = await res.json();
			// console.log(booksData.results.books);
			setData(booksData);
			setIsLoading(false);
			setError(null);
		} catch (error) {
			setError(error.message);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getBooks();
	}, [url]);
	return { data, isLoading, error, searchTerm };
};

export default useFetch;
