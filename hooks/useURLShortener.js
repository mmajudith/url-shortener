import axios from 'axios';
import { useEffect, useState } from 'react';
// import useSWR from 'swr';

// const fetcher = (url) => axios.get(url).then((response) => response.data);
const baseURL = 'https://api.shrtco.de/v2/shorten?url=';

export const useURLShortener = (link) => {
	const [data, setData] = useState({link:{}, error: ''});
	const url = `${baseURL}${link}`;
	console.log(url, 'url');
	// const { data, error } = useSWR(() => (link ? url : null), fetcher);
	useEffect(() => {
		const fetchLink = async () => {
			try {
				const response = await axios.get(url);
				const shortenLink = await response.data;
				setData(...data, {shortenLink})
				localStorage.setItem('links', JSON.stringify(data));
				return data;
			} catch (error) {
				console.log(error);
			}
		};

		fetchLink();
	}, [link]);

	return { data, error };
};
