import {createContext, Dispatch, SetStateAction} from "react";

interface LoginContextType {
	loggedIn: boolean;
	setLoggedIn: Dispatch<SetStateAction<boolean>>;
	id: string;
	setId: (id: string) => void;
}

export const LoginContext = createContext<LoginContextType>({
	loggedIn: false,
	setLoggedIn: () => {
	},
	id: '',
	setId: (id: string) => {
	},
});