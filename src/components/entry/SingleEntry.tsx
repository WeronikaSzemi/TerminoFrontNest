import { useContext, useEffect, useState } from "react";
import { EntryEntity } from "../../types/entry-entity";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { TermbaseContext } from "../../contexts/termbase.context";
import { ConfirmDeleteModal } from "../common/ConfirmDeleteModal";

export const SingleEntry = () => {
	const [entry, setEntry] = useState<EntryEntity | null>(null);
	const [showModal, setShowModal] = useState(false);

	const { entryId } = useParams();

	const { id } = useContext(UserContext);
	const { termbaseId } = useContext(TermbaseContext);

	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const res = await fetch(`http://localhost:3001/${termbaseId}/entry/${entryId}`, {
				credentials: 'include',
			});
			setEntry(await res.json());
		})();
	}, []);

	const deleteEntry = async () => {
		await fetch(`http://localhost:3001/${termbaseId}/entry/${entryId}`, {
			method: 'DELETE',
			credentials: 'include',
		});
		navigate(`/${id}/termbase/${termbaseId}/entry`);
	}

	if (entry === null) {
		return null;
	}

	return (
		<div className="container mt-5">
			<h2 className="my-5 theme-text-mainbrand">{entry.term}</h2>
			<div className="my-3">
				<div className="delete-wrap">
					<Link to={`/${id}/termbase/${termbaseId}/entry/${entryId}/edit`}
						  className="btn theme-btn-light-main mb-5 me-3"
					>
						Edytuj
					</Link>
					<button
						className="btn theme-btn-darkaccent border-3 mb-5 me-3"
						onClick={() => setShowModal(true)}
					>
						Usuń
					</button>
					<ConfirmDeleteModal
						showModal={showModal}
						onClose={() => setShowModal(false)}
						onConfirm={deleteEntry}
					>
						<div>Czy na pewno chcesz usunąć hasło „{entry.term}”?</div>
					</ConfirmDeleteModal>
					<Link to={`/${id}/termbase/${termbaseId}/entry`}
						  className="btn theme-btn-light-darkaccent mb-5 me-3"
					>
						Wróć do listy haseł
					</Link>
				</div>
			</div>

			<table className="table table-striped TermsTable align-middle">
				<tbody>
				<tr>
					<th>Źródło</th>
					<td>{entry.termSource}</td>
				</tr>
				<tr>
					<th>Definicja</th>
					<td>{entry.termDefinition}</td>
				</tr>
				<tr>
					<th>Źródło definicji</th>
					<td>{entry.termDefinitionSource}</td>
				</tr>
				<tr>
					<th>Kolokacje</th>
					<td>{entry.termCollocations}</td>
				</tr>
				<tr>
					<th>Ekwiwalent</th>
					<td className="fw-bold">{entry.equivalent}</td>
				</tr>
				<tr>
					<th>Źródło</th>
					<td>{entry.equivalentSource}</td>
				</tr>
				<tr>
					<th>Definicja</th>
					<td>{entry.equivalentDefinition}</td>
				</tr>
				<tr>
					<th>Źródło definicji</th>
					<td>{entry.termDefinitionSource}</td>
				</tr>
				<tr>
					<th>Kolokacje</th>
					<td>{entry.equivalentCollocations}</td>
				</tr>
				</tbody>
			</table>
		</div>
	)
}