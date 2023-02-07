import Image from 'next/image';

const statistics = [
	{
		name: 'Brand Recognition',
		img: '/images/icon-brand-recognition.svg',
		description:
			'  Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
	},
	{
		name: 'Detailed Records',
		img: '/images/icon-detailed-records.svg',
		description:
			'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
	},
	{
		name: 'Fully Customizable',
		img: '/images/icon-fully-customizable.svg',
		description:
			'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
	},
];

const AdvancedStatistics = () => {
	return (
		<div className="max-w-[1440px] h-fit mx-auto mt-14">
			<div className="w-10/12 h-auto m-auto flex flex-col justify-center items-center">
				<h2 className="font-bold text-very-dark-blue text-4xl">
					Advanced Statistics
				</h2>
				<p className="text-grayish-violet text-base mt-5 text-center">
					Track how your links are performing across the web with<br></br> our
					advanced statistics dashboard.
				</p>
			</div>
			<div className="w-10/12 h-auto m-auto mt-16 flex flex-row justify-between gap-8 relative z-10 after:w-full after:h-[8px] after:bg-cyan after:absolute after:top-[9.5rem] after:z-[-1]">
				{statistics.map((statistic, index) => (
					<div
						key={index}
						className={`${
							statistic.name === `Detailed Records`
								? `top-10`
								: statistic.name === `Fully Customizable`
								? `top-20`
								: `top-0`
						} bg-white px-6 pb-7 pt-0 rounded relative`}
					>
						<div className="w-fit h-fit bg-dark-violet rounded-full p-5 relative top-[-18.6%]">
							<Image src={statistic.img} alt="icons" width={40} height={40} />
						</div>
						<p className="font-bold text-very-dark-blue text-lg mb-4 mt-0 pt-0">
							{statistic.name}
						</p>
						<p className="text-gray text-sm leading-6">
							{statistic.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdvancedStatistics;
