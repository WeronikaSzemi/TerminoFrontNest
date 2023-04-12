import { EntryEntity } from "../../types/entry-entity";
import { EntryTableRow } from "./EntryTableRow";

interface Props {
	entries: EntryEntity[];
	onListChange: () => void;
}

export const EntryTable = (props: Props) => {

	return (
		<table className="table table-striped entry-table align-middle">
			<thead className="theme-bg-dark theme-text-light">
			<tr>
				<th>Termin</th>
				<th>Ekwiwalent</th>
				<th></th>
			</tr>
			</thead>
			<tbody>
			{
				props.entries.map(entry => (
					<EntryTableRow
						entry={entry}
						onListChange={props.onListChange}
						key={entry.id}
					/>
				))
			}
			</tbody>
		</table>
	)
}