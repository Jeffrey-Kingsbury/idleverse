import { Title, PlayData, Button } from './Components/exports';
import { consume_star, create_consumer, calc_consumer_cost, consumer, create_factory, calc_factory_cost } from './Engine';
import { Context } from './context';
import { useContext } from 'react';
import useInterval from './use-interval.hook';
import React from 'react';

function App() {

	useInterval(() => {
		consumer(data, setData);
	}, 100);

	const context = useContext(Context);
	if (!context) return null;

	const { data, setData } = context;

	const formatNum = (num: number): number => {
		return num >= 1000000000000 ? parseInt(Number(num).toExponential()) : num;
	};

	return (
		<div className='main'>
			<Title />
			<PlayData />

			<Button
				title='Consume star'
				func={() => consume_star(data, setData)}
			></Button>

			<Button
				title={'Create star consumer'}
				owned={formatNum(data.consumers + data.factory_consumers)}
				price={formatNum(calc_consumer_cost(data))}
				func={() => create_consumer(data, setData, calc_consumer_cost(data))}
				disabled={calc_consumer_cost(data) > data.consumed}
			></Button>

			<Button
				title={'Create star consumer Factory Level 1'}
				owned={formatNum(data.factory_1)}
				price={formatNum(calc_factory_cost(data, 1))}
				func={() => create_factory(data, setData, calc_factory_cost(data, 1), 1)}
				disabled={calc_factory_cost(data, 1) > data.consumed}
			></Button>

			<Button
				title={'Create star consumer Factory Level 2'}
				owned={formatNum(data.factory_2)}
				price={formatNum(calc_factory_cost(data, 2))}
				func={() => create_factory(data, setData, calc_factory_cost(data, 2), 2)}
				disabled={calc_factory_cost(data, 2) > data.consumed}
			></Button>
		</div>
	);
}

export default App;
