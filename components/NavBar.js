import Image from 'next/image';
import { useState, useEffect } from 'react';

const NavBar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	const handleWindowResize = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);

		return window.addEventListener('resize', handleWindowResize);
	}, [screenWidth]);

	return (
		<nav className="w-11/12 lg:w-10/12 mx-auto mt-7 flex flex-col md:flex-row justify-between font-medium text-base relative">
			<div className="w-full md:w-fit flex flex-col md:flex-row justify-between items-center relative">
				<div className="w-full md:w-fit mr-0 md:mr-10 flex flex-row justify-between items-center">
					<Image src="/images/logo.svg" width={121} height={33} alt="logo" />
					<img
						width={33}
						height={33}
						src="/images/icon-menu.svg"
						alt="menu icon"
						className="block md:hidden cursor-pointer"
						onClick={toggleMenuHandler}
					/>
				</div>
				<ul
					className={`${
						screenWidth > 767
							? `block`
							: toggleMenu
							? `block absolute z-10 inset-x-0 top-[66px]`
							: `hidden`
					} w-full md:w-fit flex flex-col md:flex-row justify-center items-center md:justify-between bg-dark-violet md:bg-white md:mt-0 rounded-t-lg md:rounded-none`}
				>
					{[['Features'], ['Pricing'], ['Resources']].map(([list], index) => (
						<li
							className="ml-0 md:ml-5 py-[18px] md:py-0 text-white md:text-grayish-violet"
							key={index}
						>
							{list}
						</li>
					))}
				</ul>
			</div>
			<div
				className={`${
					screenWidth > 767
						? `block`
						: toggleMenu
						? `block absolute z-10 inset-x-0 top-[15rem]`
						: `hidden`
				} w-full md:w-fit pb-[18px] md:pb-0 flex flex-col md:flex-row justify-center items-center md:justify-between bg-dark-violet md:bg-white rounded-b-lg md:rounded-none`}
			>
				<button className="cursor-text w-[95%] md:w-fit py-[18px] md:py-0 text-white md:text-grayish-violet border-t border-grayish-violet border-solid md:border-none">
					Login
				</button>
				<button className="cursor-text w-[95%] md:w-fit md:ml-10 ml-0 bg-cyan text-white rounded-2xl md:px-5 py-2 md:py-[6px] text-base md:text-sm">
					Sign Up
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
