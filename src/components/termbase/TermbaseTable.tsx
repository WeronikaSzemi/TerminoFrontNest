import { TermbaseTableRow } from "./TermbaseTableRow";
import { useContext } from "react";
import { TermbaseEntity } from "../../types/termbase-entity";
import { UserContext } from "../../contexts/user.context";

interface Props {
	termbaseList: TermbaseEntity[],
	onListChange: () => void,
}

export const TermbaseTable = (props: Props) => {

	const { id } = useContext(UserContext);

	return <table className="table table-striped TermsTable align-middle">
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