export interface TermbaseEntity {
	termbaseId: string;
	termbaseName: string;
}

export type NewTermbase = Omit<TermbaseEntity, 'termbaseId'>