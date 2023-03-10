import Button from './Button';

const BoostLinks = () => {
	return (
		<div className="w-full h-fit mx-auto mt-24 md:mt-44 flex flex-col justify-center items-center py-16 md:py-12 bg-[url('/images/bg-boost-mobile.svg')] sm:bg-[url('/images/bg-boost-desktop.svg')] bg-dark-violet bg-no-repeat bg-cover">
			<h3 className="font-bold text-center text-white mb-6 text-2xl sm:text-4xl">
				Boost your links today
			</h3>
			<Button text={'Get Started'} />
		</div>
	);
};

export default BoostLinks;
