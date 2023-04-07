export interface EntryEntity {
	id: string;
	createdAt: Date;
	modifiedAt: Date;
	term: string;
	termSource?: string;
	termDefinition?: string;
	termDefinitionSource?: string;
	termCollocations?: string;
	equivalent: string;
	equivalentSource?: string;
	equivalentDefinition?: string;
	equivalentDefinitionSource?: string;
	equivalentCollocations?: string;
	termbase: string;
}

export type NewEntry = Omit<EntryEntity, 'id' | 'createdAt' | 'modifiedAt' | 'termbase'>