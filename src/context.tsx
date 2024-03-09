import React, { useState, createContext, useEffect, FC, PropsWithChildren } from 'react';
import ls from 'localstorage-slim';
import { playerInterface } from './interfaces';

type providerType = {
	data: playerInterface;
	setData: Function;
}

export const Context = createContext<providerType | null>(null);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const PLAYER = {
		consumed: 0,
		consumers: 0,
		factory_consumers: 0,
		factory_1: 0,
		factory_2: 0,
		factory_3: 0,
	};
	const Storage = (value: string) => {
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
