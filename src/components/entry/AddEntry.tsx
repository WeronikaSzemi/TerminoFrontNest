import { FormEvent, useContext, useState } from "react";
import { NewEntry } from "../../types/new-entry";
import { UserContext } from "../../contexts/user.context";
import { TermbaseContext } from "../../contexts/termbase.context";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";

export const AddEntry = () => {
	const [entry, setEntry] = useState<NewEntry>({
		term: '',
		termSource: '',
		termDefinition: '',
		termDefinitionSource: '',
		termCollocations: '',
		equivalent: '',
		equivalentSource: '',
		equivalentDefinition: '',
		equivalentDefinitionSource: '',
		equivalentCollocations: '',
	});

	const [loading, setLoading] = useState<boolean>(false);

	const { id } = useContext(UserContext);
	const { termbaseId } = useContext(TermbaseContext);

	const navigate = useNavigate();

	const sendForm = async (e: FormEvent) => {
		e.preventDefault();

		setLoading(true);
		try {
			await fetch(`http://localhost:3001/${termbaseId}/entry`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(entry),
			});
			navigate(`/${id}/termbase/${termbaseId}/entry`);
		} finally {
			setLoading(false);
		}
	};

	const updateForm = (key: string, value: any) => {
		setEntry(entry => ({
			...entry,
			[key]: value,
		}));
	};

	if (loading) {
		return <Spinner/>
	}

	return (
		<div className="container p-3">
			<h2 className="my-5 theme-text-mainbrand">Dodawanie hasła</h2>
			<Link
				to={`/${id}/termbase/${termbaseId}/entry`}
				className="btn theme-btn-light-darkaccent mb-5 me-3"
				state={termbaseId}
			>
				Wróć do listy haseł
			</Link>
			<div className="my-3">
				<form onSubmit={sendForm}
					  className="col-12 col-md-10 col-lg-8">
					<div className="mb-3">
						<label htmlFor="term"
							   className="form-label fw-bold theme-text-mainbrand">Wyraz hasłowy</label>
						<input
							type="text"
							value={entry.term}
							onChange={e => updateForm('term', e.target.value)}
							maxLength={50}
							minLength={3}
							className="form-control theme-border-mainbrand"
							id="term"
							aria-describedby="termHelp"
							required
						/>
						<div id="termHelp"
							 className="form-text"><span className="theme-text-darkaccent">Pole obowiązkowe.</span> Wyraz
							hasłowy może mieć od 3 do 50 znaków. Może składać się
							z kilku wyrazów.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="termSource"
							   className="form-label fw-bold">Źródło</label>
						<input
							type="text"
							value={entry.termSource}
							onChange={e => updateForm('termSource', e.target.value)}
							maxLength={100}
							className="form-control"
							id="termSource"
							aria-describedby="termSourceHelp"
						/>
						<div id="termSourceHelp"
							 className="form-text">Np. link lub tytuł tekstu.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="termDefinition"
							   className="form-label fw-bold">Definicja</label>
						<textarea
							value={entry.termDefinition}
							onChange={e => updateForm('termDefinition', e.target.value)}
							maxLength={300}
							className="form-control"
							id="termDefinition"
							aria-describedby="termDefinitionHelp"
						/>
						<div id="termDefinitionHelp"
							 className="form-text">Maksymalnie 300 znaków.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="termDefinitionSource"
							   className="form-label fw-bold">Źródło definicji</label>
						<input
							type="text"
							value={entry.termDefinitionSource}
							onChange={e => updateForm('termDefinitionSource', e.target.value)}
							maxLength={100}
							className="form-control"
							id="termDefinitionSource"
							aria-describedby="termDefinitionSourceHelp"
						/>
						<div id="termDefinitionSourceHelp"
							 className="form-text">Np. link lub tytuł tekstu.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="termCollocations"
							   className="form-label fw-bold">Kolokacje</label>
						<textarea
							value={entry.termCollocations}
							onChange={e => updateForm('termCollocations', e.target.value)}
							maxLength={300}
							className="form-control"
							id="termCollocations"
							aria-describedby="termCollocationsHelp"
						/>
						<div id="termCollocationsHelp"
							 className="form-text">Wypisz wyrażenia po przecinku.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="equivalent"
							   className="form-label fw-bold theme-text-mainbrand">Ekwiwalent</label>
						<input
							type="text"
							value={entry.equivalent}
							onChange={e => updateForm('equivalent', e.target.value)}
							maxLength={50}
							minLength={3}
							className="form-control theme-border-mainbrand"
							id="equivalent"
							aria-describedby="equivalentHelp"
							required
						/>
						<div id="equivalentHelp"
							 className="form-text">
							<span className="theme-text-darkaccent">Pole obowiązkowe.</span> Ekwiwalent
							może mieć od 3 do 50 znaków. Może składać się z
							kilku wyrazów.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="equivalentSource"
							   className="form-label fw-bold">Źródło</label>
						<input
							type="text"
							value={entry.equivalentSource}
							onChange={e => updateForm('equivalentSource', e.target.value)}
							maxLength={100}
							className="form-control"
							id="equivalentSource"
							aria-describedby="equivalentSourceHelp"
						/>
						<div id="equivalentSourceHelp"
							 className="form-text">Np. link lub tytuł tekstu.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="equivalentDefinition"
							   className="form-label fw-bold">Definicja</label>
						<textarea
							value={entry.equivalentDefinition}
							onChange={e => updateForm('equivalentDefinition', e.target.value)}
							maxLength={300}
							className="form-control"
							id="equivalentDefinition"
							aria-describedby="equivalentDefinitionHelp"
						/>
						<div id="equivalentDefinitionHelp"
							 className="form-text">Maksymalnie 300 znaków.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="equivalentDefinitionSource"
							   className="form-label fw-bold">Źródło definicji</label>
						<input
							type="text"
							value={entry.equivalentDefinitionSource}
							onChange={e => updateForm('equivalentDefinitionSource', e.target.value)}
							maxLength={100}
							className="form-control"
							id="equivalentDefinitionSource"
							aria-describedby="equivalentDefinitionSourceHelp"
						/>
						<div id="equivalentDefinitionSourceHelp"
							 className="form-text">Np. link lub tytuł tekstu.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="equivalentCollocations"
							   className="form-label fw-bold">Kolokacje</label>
						<textarea
							value={entry.equivalentCollocations}
							onChange={e => updateForm('equivalentCollocations', e.target.value)}
							maxLength={300}
							className="form-control"
							id="equivalentCollocations"
							aria-describedby="equivalentCollocationsHelp"
						/>
						<div id="equivalentCollocationsHelp"
							 className="form-text">Wypisz wyrażenia po przecinku.
						</div>
					</div>
					<div className="my-4 container">
						<div className="row justify-content-between">
							<button type="submit"
									className="col-12 col-sm-8 btn theme-btn-mainbrand border-2">Zapisz
							</button>
							<Link to={`/${id}/termbase/${termbaseId}/entry`}
								  className="col-3 mt-3 mt-sm-0 btn theme-btn-darkaccent"
							>
								Anuluj
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}