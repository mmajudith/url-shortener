import Button from './Button';

import NavBar from './NavBar';

const Header = () => {
	return (
		<header className="max-w-[1440px] h-fit m-auto mb-24 overflow-x-hidden relative">
			<NavBar />
			<div className="w-11/12 lg:w-10/12 h-fit mx-auto mt-10 md:mt-16 mb-7 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
				<div className="w-full md:w-[65%] lg:w-[50%] xl:w-[60%] text-center md:text-left">
					<h1 className="w-full mb-3 font-bold text-very-dark-blue text-4xl xs:text-6xl md:text-5xl xl:text-[80px] leading-tight sm:leading-[4.5rem] md:leading-[4rem] xl:leading-[5.5rem]">
						More than just shorter links
					</h1>
					<p className="w-full xs:w-[70%] md:w-4/5 xl:w-[60%] mx-auto md:mx-0 text-grayish-violet mb-6 text-base">
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<Button text={'Get Started'} />
				</div>
				<div className="w-[154%] md:w-[650px] lg:w-[733px] h-[400px] xl:h-[482px] mb-7 md:mb-0 mr-[-54%] md:mr-[-204px] lg:mr-[-252px]">
					<img
						src="/images/illustration-working.svg"
						className="w-full h-full"
						alt="working woman illustration"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
