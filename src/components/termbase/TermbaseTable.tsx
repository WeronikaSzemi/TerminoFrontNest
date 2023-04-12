import { TermbaseTableRow } from "./TermbaseTableRow";
import { TermbaseEntity } from "../../types/termbase-entity";

interface Props {
	termbaseList: TermbaseEntity[],
	onListChange: () => void,
}

export const TermbaseTable = (props: Props) => {

	return <table className="table table-striped entry-table align-middle">
		<thead className="theme-bg-dark theme-text-light">
		<tr>
			<th>Nazwa słownika</th>
			<th></th>
		</tr>
		</thead>
		<tbody>
		{
			props.termbaseList.map(termbase => (
				<TermbaseTableRow
					termbase={termbase}
					onListChange={props.onListChange}
					key={termbase.termbaseId}
				/>
			))
		}
		</tbody>
	</table>
}