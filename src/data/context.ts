import { createContext, Dispatch, SetStateAction } from 'react';

export const AppContext = createContext({
	contactVisible: false,
	setContactVisible: ((state: boolean) => state) as Dispatch<SetStateAction<boolean>>
});
