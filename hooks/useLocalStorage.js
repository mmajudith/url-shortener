import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = 'https://api.shrtco.de/v2/shorten?url=';

export const useLocalStorage = (link) => {
	const [data, setData] = useState({ links: [], error: '' });
	const url = `${baseURL}${link}`;

	//Run every time link changes
	useEffect(() => {
		const fetchLink = async () => {
			if (link) {
				try {
					const response = await axios.get(url);
					const shortenLink = await response.data;

					const { result } = shortenLink;
					const { full_short_link2, original_link } = result;

					let newLinks = {
						original_link,
						full_short_link2,
					};
					let links = JSON.parse(localStorage.getItem('links'));
					if (links) {
						links = [...links, newLinks];
					} else {
						links = [newLinks];
					}

					localStorage.setItem('links', JSON.stringify(links));
					setData({ ...data, links });
				} catch (err) {
					setData({ ...data, error: err });
				}
			}
		};

		fetchLink();
	}, [link]);

	//Run once to access the local storage data
	useEffect(() => {
		const links = JSON.parse(localStorage.getItem('links'));

		if (links) {
			setData({ ...data, links });
		}
	}, []);

	return data;
};
