import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export const AppContext = createContext({
	contactVisible: false,
	setContactVisible: ((state: boolean) => state) as Dispatch<SetStateAction<boolean>>
});
