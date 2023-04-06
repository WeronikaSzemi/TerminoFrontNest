import { createContext } from "react";

interface UserContextType {
	id: string;
	setId: (id: string) => void;
}

export const UserContext = createContext<UserContextType>({
	id: '',
	setId: (id: string) => {
	},
});