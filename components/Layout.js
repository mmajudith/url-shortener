import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className="w-full h-full m-auto">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
