import { playerInterface } from './interfaces';

export const consume_star = (data: playerInterface, setData: Function) => {
	setData({ ...data, consumed: data.consumed + 1 });
};

export const create_consumer = (data: playerInterface, setData: Function, price: number) => {
	setData({ ...data, consumers: data.consumers + 1, consumed: data.consumed - price });
};

export const calc_consumer_cost = (data: playerInterface): number => {
	if (data.consumers === 0) return 10;
	return Number((100 * Math.pow(1.07, data.consumers)).toFixed(0));
};

export const calc_factory_cost = (data: playerInterface, level: number): number => {
	const { factory_1, factory_2, factory_3 } = data;
	switch (level) {
		default:
			return 0;

		case 1:
			return Number((1000 * Math.pow(1.28, factory_1)).toFixed(0));

		case 2:
			return Number((10000 * Math.pow(1.28, factory_2)).toFixed(0));

		case 3:
			return Number((100000 * Math.pow(1.28, factory_3)).toFixed(0));
	}
};

export const consumer = (data: playerInterface, setData: Function) => {
	const { consumers, consumed, factory_1, factory_2, factory_consumers } = data;
	const add = consumed + consumers + factory_consumers;

	setData({ ...data, consumed: add, consumers: consumers, factory_consumers: factory_1 + factory_consumers, factory_1: factory_1 + factory_2 });
};

export const create_factory = (data: playerInterface, setData: Function, price: number, level: number) => {
	switch (level) {
		default:
			return;

		case 1:
			setData({ ...data, factory_1: data.factory_1 + 1, consumed: data.consumed - price });
			break;

		case 2:
			setData({ ...data, factory_2: data.factory_2 + 1, consumed: data.consumed - price });
			break;

		case 3:
			setData({ ...data, factory_3: data.factory_3 + 1, consumed: data.consumed - price });
			break;
	}
};

export const create_factory_2 = (data: playerInterface, setData: Function, price: number) => {
	setData({ ...data, factory_2: data.factory_2 + 1, consumed: data.consumed - price });
};
