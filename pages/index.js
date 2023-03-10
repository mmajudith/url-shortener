import Head from 'next/head';

import ShortenForm from '@/components/Form';
import AdvancedStatistics from '@/components/AdvancedStat';
import BoostLinks from '@/components/BoostLinks';

export default function Home() {
	return (
		<>
			<Head>
				<title>URL Shortener</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-full h-auto m-auto bg-[hsl(225,33%,95%)]">
				<ShortenForm />
				<AdvancedStatistics />
				<BoostLinks />
			</main>
		</>
	);
}
