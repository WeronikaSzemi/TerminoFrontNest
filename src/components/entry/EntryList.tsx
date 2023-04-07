import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { ConfirmDeleteModal } from "../common/ConfirmDeleteModal";
import { EntryTable } from "./EntryTable";
import { TermbaseContext } from "../../contexts/termbase.context";
import { EntryEntity } from "../../types/entry-entity";
import { TermbaseEntity } from "../../types/termbase-entity";

export const EntryList = () => {
	const [entryList, setEntryList] = useState<EntryEntity[] | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [termbaseName, setTermbaseName] = useState<string>('');

	const { id } = useContext(UserContext);
	const { termbaseId } = useContext(TermbaseContext);

	const navigate = useNavigate();

	const refreshList = async () => {
		setEntryList(null);

		const termbaseRes = await fetch(`http://localhost:3001/${id}/termbase/${termbaseId}/`);
		const termbase: TermbaseEntity = await termbaseRes.json();
		setTermbaseName(termbase.termbaseName);

		const res = await fetch(`http://localhost:3001/${termbaseId}/entry`);
		const data: EntryEntity[] = await res.json();
		setEntryList(data);
	}

	useEffect(() => {
		(async () => {
			await refreshList();
		})();
	}, []);

	const deleteTermbase = async () => {
		await fetch(`http://localhost:3001/${id}/termbase/${termbaseId}`, {
			method: 'DELETE',
		});
		setShowModal(false);
		navigate(`/${id}/termbase/`);
	}

	if (entryList === null) {
		return <Spinner/>
	}

	return <>
		<div className="container p-3">
			<h2 className="my-5 theme-text-mainbrand">{termbaseName}</h2>
			<div className="delete-wrap">
				<Link
					to={`/${id}/termbase/${termbaseId}/entry/add`}
					className="btn theme-btn-light-main mb-5 me-3"
				>
					Dodaj hasło
				</Link>
				<button
					className="btn theme-btn-darkaccent border-3 mb-5 me-3"
					onClick={() => setShowModal(true)}
				>
					Usuń słownik
				</button>
				<ConfirmDeleteModal
					showModal={showModal}
					onClose={() => setShowModal(false)}
					onConfirm={deleteTermbase}
				>
					<div>Czy na pewno chcesz usunąć słownik „{termbaseName}”?</div>
				</ConfirmDeleteModal>
				<Link
					to={`/${id}/termbase`}
					className="btn theme-btn-light-darkaccent mb-5 me-3"
					state={termbaseName}
				>
					Wróć do listy słowników
				</Link>
			</div>
			<EntryTable entries={entryList}
						onListChange={refreshList}
			/>
		</div>
	</>
}