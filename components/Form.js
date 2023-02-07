import { useState } from 'react';

import { useURLShortener } from '@/hooks/useURLShortener';

const ShortenForm = () => {
	// const [copyLink, setCopyLink] = useState('Copy');
	const [link, setLink] = useState('');
	const [completeLink, setCompleteLink] = useState('');
	const [links, setLinks] = useState([]);
	const [errorMessage, setErrorMessage] = useState({
		errorMes: '',
		errorStyle: false,
	});

	const { data, error } = useURLShortener(completeLink);

	const copyHandler = (text) => {
		if (!navigator.clipboard) {
			return alert('Sorry, navigator clipboard not supported by browser.');
		}
		navigator.clipboard.writeText(text);
		// setCopyLink('Copied!');
	};

	const submitLinkHandler = (e) => {
		e.preventDefault();

		if (link.length === 0) {
			return setErrorMessage({
				errorMes: 'Please add a link',
				errorStyle: true,
			});
		}

		setCompleteLink(link);

		if (error) {
			return setErrorMessage({
				errorMes: 'Please add a valid link or check your internet',
				errorStyle: true,
			});
		}
		setErrorMessage({ errorMes: '', errorStyle: false });
		setLink('');
		console.log(data);
		setLinks((prev) => [
			...prev,
			{
				original_link: data?.result.original_link,
				short_link: data?.result.full_short_link2,
			},
		]);
	};

	return (
		<div className="max-w-[1440px] h-fit m-auto relative">
			<form
				onSubmit={submitLinkHandler}
				className="w-10/12 h-auto m-auto py-12 absolute inset-x-0 top-[-88%] rounded-lg bg-[url('/images/bg-shorten-desktop.svg')] bg-dark-violet bg-no-repeat bg-cover"
			>
				<div className="w-10/12 mx-auto flex flex-row justify-between items-center">
					<input
						type="text"
						placeholder="Shorten a link here..."
						className={`w-[77%] py-[10px] pl-5 rounded ${
							errorMessage.errorStyle
								? `border-2 border-red border-solid placeholder-red`
								: `border-none outline-none placeholder-gray`
						}`}
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
					<div className="w-1/5 hover:bg-white rounded">
						<button
							type="submit"
							className="w-full border-none outline-none bg-cyan text-white rounded py-[10px] text-base font-medium hover:opacity-60"
						>
							Shorten It!
						</button>
					</div>
				</div>
				<span className="text-red text-xs absolute pt-2 left-[8.2%] italic">
					{errorMessage.errorMes}
				</span>
			</form>
			<div className="w-10/12 h-auto m-auto pt-20 text-base">
				{links.length > 0 &&
					links.map((link, index) => (
						<div
							key={index}
							className="w-full h-fit mx-auto my-3 px-5 py-4 flex flex-row justify-between items-center bg-white rounded"
						>
							<p className="text-very-dark-violet">{link.original_link}</p>
							<div className="flex flex-row justify-between items-center gap-5">
								<p className="text-cyan text-right">{link.short_link}</p>
								<p
									className={`${
										copyLink === 'Copied!'
											? `bg-very-dark-blue`
											: `bg-cyan hover:bg-opacity-60`
									} cursor-pointer  text-white rounded-md px-8 py-2 text-sm`}
									onClick={() => copyHandler(link.short_link)}
								>
									{copyLink}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ShortenForm;
