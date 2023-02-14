const Button = ({ text }) => {
	return (
		<button className="cursor-text bg-cyan text-white rounded-2xl px-11 md:px-8 py-2 text-sm">
			{text}
		</button>
	);
};

export default Button;
