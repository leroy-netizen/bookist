/** @format */

import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const abortCont = new AbortController();
		const getBooks = async () => {
			try {
				const res = await fetch(url, { signal: abortCont.signal });
				if (!res.ok) {
					throw Error('could not get data for that resource!🚫');
				}
				// console.log(res);
				const data = await res.json();
				// console.log(booksData.results.books);
				setData(data);
				setIsLoading(false);
				setError(null);
			} catch (error) {
				if (error.name === 'AbortError') {
					console.log('fetch Aborted');
				} else {
					setError(error.message);
					setIsLoading(false);
				}
			}
		};

		getBooks();
		return () => abortCont.abort();
	}, [url]);
	return { data, isLoading, error };
};

export default useFetch;
