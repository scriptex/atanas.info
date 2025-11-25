import type { RefObject } from 'react';
import { useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { format } from 'date-fns/format';

import type { Project } from '@data/projects';

export type Theme = 'dark' | 'light';
export type Ref<T> = RefObject<null | T>;
export type PaginationData<T> = {
	items: T[][] | undefined;
	menu: Project[] | undefined;
};

export const random = (): number => {
	const crypto = window.crypto;
	const array = new Uint32Array(1);

	return crypto.getRandomValues(array)[0] / (Math.pow(2, 32) - 1);
};

export const formatDate = (date: number | string, formatter = 'dd MMM yyyy'): string => {
	if (!date) {
		return '';
	}

	return format(new Date(date), formatter);
};

export const setThemeClassName = (theme: Theme): void => {
	const { classList } = document.documentElement;

	classList.remove('theme-dark');
	classList.remove('theme-light');
	classList.add(`theme-${theme}`);
};

export const onThemeChange = (callback: (e: MediaQueryListEvent) => void): void => {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', callback);
	window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', callback);
};

export const waitForElement = (selector: string): Promise<Element | null> =>
	new Promise(resolve => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver(() => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});

export const composeClassName = (main: string, modifiers: string[], optional: Array<string | undefined> = []): string =>
	[main, ...modifiers.filter(Boolean).map((modifier: string) => `${main}--${modifier}`), ...optional]
		.filter(Boolean)
		.join(' ');

export const useNetworkState = (): boolean => {
	const [online, setOnline] = useState(true);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setOnline(navigator.onLine);
	}, []);

	return online;
};

export const log = (message: string): void => {
	if (process.env.JEST_WORKER_ID) {
		return;
	}

	console.log(message);
};

export const usePagination = <T>(data: T[], size = 10): PaginationData<T> => {
	const [items, setItems] = useState<T[][] | undefined>();

	data = data.map((item, index) => ({ ...item, index }));

	useEffect(() => {
		setItems([...Array(Math.ceil(data.length / size))].map((_, i) => data.slice(size * i, size + size * i)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		items,
		menu: items?.map((_, i) => ({
			description: '',
			index: i,
			title: (i + 1).toString(),
			url: ''
		}))
	};
};

export const useCurrentPageParam = (): number => {
	const params = useSearchParams();
	const page = useMemo(() => {
		const pageFromParams = params?.get('page');

		if (!pageFromParams) {
			return 1;
		}

		const pageToNumber = Number(pageFromParams);

		if (isNaN(Number(pageToNumber))) {
			return 1;
		}

		return pageToNumber;
	}, [params]);

	return page;
};

export const getHoliday = () => {
	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth();

	if (month === 9 && day === 31) {
		return 'halloween';
	}

	if (month === 11 && day >= 24 && day <= 26) {
		return 'winter';
	}

	return undefined;
};
