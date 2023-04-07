import { createContext } from "react";

interface TermbaseContextType {
	termbaseId: string;
	setTermbaseId: (termbaseId: string) => void;
}

export const TermbaseContext = createContext<TermbaseContextType>({
	termbaseId: '',
	setTermbaseId: (termbaseId: string) => {
	},
});