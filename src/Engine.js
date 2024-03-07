export const consume_star = (data, setData) => {
	setData({ ...data, consumed: data.consumed + 1 });
};

export const create_consumer = (data, setData, price) => {
	setData({ ...data, consumers: data.consumers + 1, consumed: data.consumed - price });
};

export const calc_consumer_cost = (data) => {
	if (data.consumers === 0) return 10;
	return (100 * Math.pow(1.07, data.consumers)).toFixed(0);
};

export const calc_factory_1_cost = (data) => {
	if (data.consumers === 0) return 10;
	return (1000 * Math.pow(1.28, data.factory_1)).toFixed(0);
};

export const consumer = (data, setData) => {
	const { consumers, consumed, factory_1, factory_consumers } = data;
	const add = consumed + consumers + factory_consumers;

	setData({ ...data, consumed: add, consumers: consumers, factory_consumers: factory_1 + factory_consumers });
};

export const create_factory_1 = (data, setData, price) => {
	setData({ ...data, factory_1: data.factory_1 + 1, consumed: data.consumed - price });
};
