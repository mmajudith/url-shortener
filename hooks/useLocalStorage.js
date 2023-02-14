import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = 'https://api.shrtco.de/v2/shorten?url=';

export const useLocalStorage = (link) => {
	const [data, setData] = useState({ links: {}, error: '' });
	const url = `${baseURL}${link}`;
	console.log(url, 'url');

	useEffect(() => {
		const fetchLink = async () => {
			if (link) {
				try {
					const response = await axios.get(url);
					const shortenLink = await response.data;

					localStorage.setItem('shortenLink', JSON.stringify(shortenLink));
				} catch (err) {
					console.log(err);
					setData({ ...data, error: err });
				}
			}
		};

		fetchLink();
	}, [link]);

	useEffect(() => {
		const shortenLinks = async () => {
			if (link) {
				try {
					const links = await JSON.parse(localStorage.getItem('shortenLink'));

					setData({ ...data, links });
				} catch (err) {
					setData({ ...data, error: err });
				}
			}
		};
		shortenLinks();
	}, [link]);

	return data;
};
