/** @format */

import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		// we use this to stop the fetch
		// const abortCont = new AbortController();
		const getBooks = async () => {
			try {
				// { signal: abortCont.signal }
				const res = await fetch(url);
				if (!res.ok) {
					throw Error('could not get data for that resource!🚫');
				}
				// console.log(res);
				const data = await res.json();
				// console.log(booksData.results.books);
				console.log(data);
				setData(data);
				setIsLoading(false);
				setError(null);
			} catch (error) {
				if (error.name === 'AbortError') {
					console.log('fetch Aborted');
				} else {
					setIsLoading(false);
					setError(error.message);
				}
			}
		};
		(async () => await getBooks())();
		// getBooks();
		// return () => abortCont.abort();
	}, [url]);
	return { data, isLoading, error };
};

export default useFetch;
