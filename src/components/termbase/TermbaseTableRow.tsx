import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { TermbaseEntity } from "../../types/termbase-entity";
import {ConfirmDeleteModal} from "../common/ConfirmDeleteModal";
import { UserContext } from "../../contexts/user.context";

interface Props {
	termbase: TermbaseEntity,
	onListChange: () => void,
}

export const TermbaseTableRow = (props: Props) => {
	const [showModal, setShowModal] = useState(false);

	const { id } = useContext(UserContext);

	const navigate = useNavigate();

	const deleteTermbase = async () => {
		const verifRes = await fetch(`http://localhost:3001/auth/verify/${id}`);
		const result = await verifRes.json();

		if (!result.result) {
			navigate('/user/login');
		} else {
			await fetch(`http://localhost:3001/${id}/termbase/${props.termbase.termbaseId}`, {
				method: 'DELETE',
			});
			setShowModal(false);
			props.onListChange();
		}
	}

	return <tr>
		<td><strong>{props.termbase.termbaseName}</strong></td>
		<td>
			<div className="delete-wrap">
				<Link to={`/${id}/termbase/${props.termbase.termbaseId}`}
					  className="btn btn-sm theme-btn-mainbrand mx-1 my-1 my-md-0"
				>
					<svg xmlns="http://www.w3.org/2000/svg"
						 width="16"
						 height="16"
						 fill="currentColor"
						 className="bi bi-eye-fill"
						 viewBox="0 0 16 16">
						<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
						<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
					</svg>
				</Link>
				<button
					className="btn btn-sm theme-btn-darkaccent mx-1 my-1 my-md-0"
					onClick={() => setShowModal(true)}
				>
					<svg xmlns="http://www.w3.org/2000/svg"
						 width="16"
						 height="16"
						 fill="currentColor"
						 className="bi bi-trash3-fill"
						 viewBox="0 0 16 16">
						<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
					</svg>
				</button>
				<ConfirmDeleteModal
					showModal={showModal}
					onClose={() => setShowModal(false)}
					onConfirm={deleteTermbase}
				>
					<div>Czy na pewno chcesz usunąć słownik „{props.termbase.termbaseName}”?</div>
				</ConfirmDeleteModal>
			</div>
		</td>
	</tr>
}