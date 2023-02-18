import { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const ShortenForm = () => {
	const [link, setLink] = useState('');
	const [completeLink, setCompleteLink] = useState('');
	const [errorMessage, setErrorMessage] = useState({
		errorMes: '',
		errorStyle: false,
	});

	const [data, setData] = useLocalStorage(completeLink);
	const { links, error } = data;

	//Copy shortened link function
	const copyHandler = (e, text) => {
		if (!navigator.clipboard) {
			return alert('Sorry, navigator clipboard not supported by browser.');
		}
		navigator.clipboard.writeText(text);
		e.target.innerHTML = 'Copied!';
		e.target.style.backgroundColor = 'hsl(257, 27%, 26%)';
	};

	//Function for Deleting a link both original and shortened link
	const deleteHandler = (index) => {
		if (typeof window !== 'undefined') {
			let links = JSON.parse(localStorage.getItem('links'));
			const filteredLinks = links.filter((link, i) => i !== index);
			links = filteredLinks;
			localStorage.setItem('links', JSON.stringify(links));

			setData({ ...data, links });
		}
	};

	//Submit function for shortening link
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
			setData({ ...data, error: '' });
			setErrorMessage({
				errorMes: 'Please add a valid link or check your internet',
				errorStyle: true,
			});
			return;
		}
		setErrorMessage({ errorMes: '', errorStyle: false });
		setLink('');
	};

	return (
		<div className="max-w-[1440px] h-fit m-auto ">
			<form
				onSubmit={submitLinkHandler}
				className="w-11/12 lg:w-10/12 h-auto m-auto px-6 sm:px-0 py-6 sm:py-12 relative top-[-78.5px] sm:top-[-71px] rounded-lg bg-[url('/images/bg-shorten-mobile.svg')] sm:bg-[url('/images/bg-shorten-desktop.svg')] bg-dark-violet bg-no-repeat bg-cover"
			>
				<div className="w-full sm:w-10/12 mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5">
					<div className="w-full sm:w-[77%] flex flex-col justify-start relative">
						<input
							type="text"
							placeholder="Shorten a link here..."
							className={`w-full py-[10px] pl-5 rounded ${
								errorMessage.errorStyle
									? `border-2 border-red border-solid placeholder-red outline-none`
									: `border-none outline-none placeholder-gray`
							}`}
							value={link}
							onChange={(e) => setLink(e.target.value)}
						/>
						<span className="text-red text-xs italic mt-2 sm:mt-0 sm:absolute sm:top-14">
							{errorMessage.errorMes}
						</span>
					</div>
					<div className="w-full sm:w-1/5 hover:bg-white rounded">
						<button
							type="submit"
							className="w-full border-none outline-none bg-cyan text-white rounded py-[10px] text-base font-medium hover:opacity-60"
						>
							Shorten It!
						</button>
					</div>
				</div>
			</form>
			<div className="w-11/12 lg:w-10/12 h-auto mx-auto mt-[-53px] text-sm sm:text-base">
				{links.length > 0
					? links.map((link, index) => (
							<div
								key={index}
								className="w-full h-fit mx-auto my-3 md:px-5 py-4 flex flex-col md:flex-row justify-start md:justify-between md:items-center bg-white rounded md:gap-4"
							>
								<p className="w-full md:w-fit px-4 md:px-0 pb-4 md:pb-0 text-very-dark-violet border-b-2 border-[hsl(225,33%,95%)] border-solid md:border-none break-all">
									{link.original_link.toLowerCase()}
								</p>
								<div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center px-4 md:px-0 gap-4 md:gap-5">
									<p className="pt-4 md:py-0 text-cyan md:text-right">
										{link.full_short_link2}
									</p>
									<p
										className={`bg-cyan hover:bg-opacity-60 cursor-pointer text-white rounded-md px-6 py-3 md:py-2 text-sm text-center`}
										onClick={(e) => copyHandler(e, link.full_short_link2)}
									>
										Copy
									</p>
									<p
										className={`bg-dark-violet hover:bg-opacity-60 cursor-pointer text-white rounded-md px-6 py-3 md:py-2 text-sm text-center`}
										onClick={() => deleteHandler(index)}
									>
										Delete
									</p>
								</div>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default ShortenForm;
