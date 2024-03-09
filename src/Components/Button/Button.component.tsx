import React from 'react';
import './Button.component.scss';

export const Button = ({
	title = '',
	price = -1,
	owned = -1,
	func = () => {
		return;
	},
	disabled = false,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={func}
		>
			{title}
			{owned >= 0 && (
				<>
					<br />
					Owned: {owned}
				</>
			)}
			{price >= 0 && (
				<>
					<br />- {price} stars -
				</>
			)}
		</button>
	);
};
