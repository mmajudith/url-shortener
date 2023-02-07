import Image from 'next/image';
import Button from './Button';

import NavBar from './NavBar';

const Header = () => {
	return (
		<header className="max-w-[1440px] h-fit m-auto mb-24 overflow-x-hidden">
			<NavBar />
			<div className="w-10/12 h-[482px] relative mx-auto mt-16 mb-7 flex flex-row justify-between items-center">
				<div className="w-[60%] ">
					<h1 className="w-full font-bold text-very-dark-blue text-7xl leading-tight">
						More than just shorter links
					</h1>
					<p className="w-[50%] text-grayish-violet mb-6 text-base">
						Build your brand’s recognition and get detailed insights on how your
						links are performing.
					</p>
					<Button text={'Get Started'} />
				</div>
				<div className="absolute top-0 right-[-20%]">
					<Image
						src="/images/illustration-working.svg"
						width={733}
						height={482}
						alt="working woman illustration"
						priority
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
