import { createContext } from 'react';

export const AppContext = createContext({
	contactVisible: false,
	setContactVisible: (state: boolean) => state
});
