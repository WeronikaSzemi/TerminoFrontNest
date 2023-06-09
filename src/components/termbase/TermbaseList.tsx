import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { UserContext } from "../../contexts/user.context";
import { TermbaseEntity } from "../../types/termbase-entity";
import { TermbaseTable } from "./TermbaseTable";
import { AddTermbase } from "./AddTermbase";

export const TermbaseList = () => {
	const [termbaseList, setTermbaseList] = useState<TermbaseEntity[] | null>(null);
	const [showForm, setShowForm] = useState(false);

	const { id } = useContext(UserContext);

	const refreshList = async () => {
		setTermbaseList(null);

		const res = await fetch(`http://localhost:3001/${id}/termbase`, {
			credentials: "include",
		});
		const data = await res.json();
		setTermbaseList(data);
		setShowForm(false);
	};

	useEffect(() => {
		(async () => {
			await refreshList();
		})();
	}, []);

	if (termbaseList === null) {
		return <Spinner/>
	}

	const handleShowForm = (e: BaseSyntheticEvent) => {
		e.preventDefault();

		setShowForm(true);
	}

	return <div className="container p-3">
		<h2 className="my-5 theme-text-mainbrand">Twoje słowniki</h2>
		<button
			className="btn theme-btn-light-main mb-5"
			onClick={handleShowForm}
		>
			Stwórz nowy słownik
		</button>
		<Link
			to={`/user/${id}`}
			className="btn theme-btn-light-darkaccent mb-5 ms-3"
		>
			Wróć do panelu
		</Link>
		<div>
			{showForm ? <AddTermbase onListChange={refreshList}/> : null}
		</div>
		<TermbaseTable termbaseList={termbaseList}
						onListChange={refreshList}
		/>
	</div>
}