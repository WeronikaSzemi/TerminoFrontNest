import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link, useNavigate } from "react-router-dom";
import { ConfirmDeleteModal } from "../common/ConfirmDeleteModal";

export const Account = () => {
	const [showModal, setShowModal] = useState(false);

	const { id } = useContext(UserContext);

	const navigate = useNavigate();

	const deleteUser = async () => {
		await fetch(`http://localhost:3001/user/${id}`, {
			method: 'DELETE',
			credentials: 'include',
		});
		setShowModal(false);
		navigate('/');
	}

	return (
		<div className="container p-3">
			<h2 className="my-5 theme-text-mainbrand">Twoje konto</h2>
			<div className="delete-wrap">
				<button
					className="btn theme-btn-darkaccent border-3 mb-5 me-3"
					onClick={() => setShowModal(true)}
				>
					Usuń konto
				</button>
				<ConfirmDeleteModal
					showModal={showModal}
					onClose={() => setShowModal(false)}
					onConfirm={deleteUser}
				>
					<div>Czy na pewno chcesz usunąć swoje konto?</div>
				</ConfirmDeleteModal>
				<Link
				to={`/user/${id}`}
				className="btn theme-btn-mainbrand border-3 mb-5 me-3"
			>
				Wróć do panelu
			</Link>
			</div>

		</div>
	);
}