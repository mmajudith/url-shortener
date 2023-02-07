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
				<div className="w-10/12 h-auto mx-auto flex flex-row justify-between gap-2">
					<div className="w-[29%] text-white">
						<Image
							src="/images/footer-logo.svg"
							alt="logo"
							width={121}
							height={33}
						/>
					</div>

					<div className="flex flex-row justify-between gap-24">
						{footerItems.map((el, index) => (
							<div key={index} className="">
								<p className="mb-5 text-white font-medium">{el.name}</p>
								{el.items.map((item, index) => (
									<ul key={index}>
										<li className="text-gray mb-3 text-sm">{item}</li>
									</ul>
								))}
							</div>
						))}
					</div>

					<div className="h-fit flex flex-row justify-between gap-5">
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
