import Image from 'next/image';

const footerItems = [
	{
		name: 'Features',
		items: ['Link Shortening', 'Branded', 'Links', 'Analytics'],
	},
	{
		name: 'Resources',
		items: ['Blog', 'Developers', 'Support'],
	},
	{
		name: 'Company',
		items: ['About', 'Our Team', 'Careers', 'Contact'],
	},
];

const Footer = () => {
	return (
		<footer className="w-full h-auto m-auto bg-very-dark-violet">
			<div className="max-w-[1440px] h-fit mx-auto py-14">
				<div className="w-11/12 lg:w-10/12 h-auto mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-12 md:gap-0">
					<div className="w-fit xl:w-[29%] mx-auto md:mx-0 text-white ">
						<Image
							src="/images/footer-logo.svg"
							alt="logo"
							width={121}
							height={33}
						/>
					</div>

					<div className="w-fit mx-auto md:mx-0 flex flex-col md:flex-row justify-center md:justify-between gap-12 md:gap-10 lg:gap-24">
						{footerItems.map((el, index) => (
							<div key={index} className="">
								<p className="mb-5 text-white font-medium text-center md:text-left">
									{el.name}
								</p>
								{el.items.map((item, index) => (
									<ul key={index} className="text-center md:text-left">
										<li className="text-gray mb-3 text-sm">{item}</li>
									</ul>
								))}
							</div>
						))}
					</div>

					<div className="w-fit h-fit mx-auto md:mx-0 flex flex-row justify-between gap-5">
						<Image
							src="/images/icon-facebook.svg"
							alt="facebook icon"
							width={24}
							height={24}
						/>
						<Image
							src="/images/icon-twitter.svg"
							alt="twitter icon"
							width={24}
							height={20}
						/>
						<Image
							src="/images/icon-pinterest.svg"
							alt="pinterest-icon"
							width={24}
							height={24}
						/>
						<Image
							src="/images/icon-instagram.svg"
							alt="instagram icon"
							width={24}
							height={24}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
