import { useState, createContext, useEffect } from 'react';
import ls from 'localstorage-slim';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const PLAYER = {
		consumed: 0,
		consumers: 0,
		factory_consumers: 0,
		factory_1: 0,
	};
	const Storage = (value) => {
		const storageKey = 'idleverse-save';
		const localStorageValue = JSON.parse(ls.get(storageKey, { decrypt: true }));
		const [Value, SetValue] = useState(localStorageValue ? localStorageValue : value);

		useEffect(() => {
			ls.set(storageKey, JSON.stringify(Value), { encrypt: true });
		}, [Value]);

		return [Value, SetValue];
	};

	const [data, setData] = useState(PLAYER);

	return <Context.Provider value={{ data, setData }}>{children}</Context.Provider>;
};
