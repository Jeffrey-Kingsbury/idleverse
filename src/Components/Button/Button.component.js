import './Button.component.scss';

export const Button = ({
	title,
	price = null,
	func = () => {
		console.log('clicked');
	},
	disabled = false,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={func}
		>
			{title}
			{price && (
				<>
					<br />- {price} stars -
				</>
			)}
		</button>
	);
};
