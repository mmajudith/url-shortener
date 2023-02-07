import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((response) => response.data);
const baseURL = 'https://api.shrtco.de/v2/shorten?url=';

export const useURLShortener = (link) => {
	const url = `${baseURL}${link}`;

	const { data, error } = useSWR(url, fetcher);

	return { data, error };
};
