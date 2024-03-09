import { Context } from '../../context';
import { useContext } from 'react';
import { playerInterface } from '../../interfaces';
import './PlayData.component.scss';
export const PlayData = () => {
	const context = useContext(Context);
	if (!context) return null;
	const { data } = context;

	return (
		<div>
			<p>Stars consumed: {data.consumed >= 1000000000000 ? data.consumed.toExponential() : data.consumed}</p>
			<p>Total consumers: {data.consumers + data.factory_consumers}</p>
		</div>
	);
};
