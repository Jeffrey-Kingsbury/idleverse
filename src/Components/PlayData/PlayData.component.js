import { Context } from '../../context';
import { useContext } from 'react';
import './PlayData.component.scss';
export const PlayData = () => {
	const { data } = useContext(Context);
	return (
		<div>
			<p>Stars consumed: {(1000000000000).toExponential()}</p>
			<p>Total consumers: {data.consumers + data.factory_consumers}</p>
		</div>
	);
};
