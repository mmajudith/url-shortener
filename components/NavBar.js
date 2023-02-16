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
		<nav className="w-11/12 lg:w-10/12 mx-auto mt-7 flex flex-col md:flex-row justify-between  font-medium text-base relative gap-10">
			<div className="w-full md:w-[121px] h-[33px] flex flex-row justify-between items-center">
				<img
					src="/images/logo.svg"
					className="md:w-full md:h-full"
					alt="logo"
				/>
				<img
					width={33}
					height={33}
					src="/images/icon-menu.svg"
					alt="menu icon"
					className="block md:hidden cursor-pointer"
					onClick={toggleMenuHandler}
				/>
			</div>
			<div
				className={`${
					screenWidth > 767
						? `block`
						: toggleMenu
						? `block absolute z-10 inset-x-0 top-16`
						: `hidden`
				} w-full md:w-[85%] py-10 md:py-0 flex flex-col md:flex-row justify-center md:justify-between items-center bg-dark-violet md:bg-white md:mt-0 rounded-xl md:rounded-none`}
			>
				<ul
					className={`w-full md:w-fit pb-7 md:pb-0 flex flex-col md:flex-row justify-center items-center md:justify-between gap-7`}
				>
					{[['Features'], ['Pricing'], ['Resources']].map(([list], index) => (
						<li className=" text-white md:text-grayish-violet" key={index}>
							{list}
						</li>
					))}
				</ul>

				<div
					className={`w-full md:w-fit flex flex-col md:flex-row justify-center items-center md:justify-between md:gap-10`}
				>
					<button className="cursor-text w-[95%] md:w-fit py-7 md:py-0 text-white md:text-grayish-violet border-t border-grayish-violet border-solid md:border-none">
						Login
					</button>
					<button className="cursor-text w-[95%] md:w-24 bg-cyan text-white rounded-2xl py-2 md:py-[6px] text-base md:text-sm">
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
