import { Title, PlayData, Button } from './Components/exports';
import { consume_star, create_consumer, calc_consumer_cost, consumer, create_factory_1, calc_factory_1_cost } from './Engine';
import { Context } from './context';
import { useContext } from 'react';
import useInterval from './use-interval.hook';

function App() {
	const { data, setData } = useContext(Context);
	useInterval(() => {
		if (data.consumers > 0) {
			consumer(data, setData);
		}
	}, 100);

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
				price={calc_consumer_cost(data)}
				func={() => create_consumer(data, setData, calc_consumer_cost(data))}
				disabled={calc_consumer_cost(data) > data.consumed}
			></Button>

			<Button
				title={'Create star consumer Factory Level 1'}
				price={calc_factory_1_cost(data)}
				func={() => create_factory_1(data, setData, calc_factory_1_cost(data))}
				disabled={calc_factory_1_cost(data) > data.consumed}
			></Button>
		</div>
	);
}

export default App;
