import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link, useNavigate } from "react-router-dom";
import { FilteredUser } from "../../types/filtered-user";

export const Dashboard = () => {
	const [name, setName] = useState<string>('');

	const { id } = useContext(UserContext);

	const navigate = useNavigate();

	useEffect(() => {
		getName();
	}, []);

	const getName = async () => {
		const res = await fetch(`http://localhost:3001/user/${id}?by=userId`, {
			credentials: 'include',
		});
		const user: FilteredUser = await res.json();
		const email = user.email;
		setName(email.substring(0, email.indexOf('@')));
	}

	const logOut = async (e: BaseSyntheticEvent) => {
		e.preventDefault();

		const res = await fetch('http://localhost:3001/auth/logout', {
			credentials: "include",
		});
		const result = await res.json();
		if (result) {
			navigate('/user/login');
		}
	}

	return (
		<div className="container p-3">
			<div className="row">
				<h2 className="my-5 theme-text-mainbrand">Witaj, {name}!</h2>

				<div className="card col-10 col-lg-3 col-md-5 d-flex text-center mb-4 mx-4 theme-border-mainbrand shadow">
					<div className="card-body">
						<p className="text-center display-6 theme-text-mainbrand">
							<i className="bi bi-book"></i>
						</p>
						<h3 className="card-title mb-4 fs-4 theme-text-dark">Twoje słowniki</h3>
						<Link to={`/${id}/termbase`}
							  className="btn theme-btn-mainbrand">Zobacz</Link>
					</div>
				</div>
				<div className="card col-10 col-lg-3 col-md-5 d-flex text-center mb-4 mx-4 theme-border-lightaccent shadow">
					<div className="card-body">
						<p className="text-center display-6 theme-text-lightaccent">
							<i className="bi bi-person-circle"></i>
						</p>
						<h3 className="card-title mb-4 fs-4 theme-text-dark">Twoje dane</h3>
						<Link to={`/user/${id}/account`}
							  className="btn theme-btn-lightaccent">Zarządzaj</Link>
					</div>
				</div>
				<div className="card col-10 col-lg-3 col-md-5 d-flex text-center mb-4 mx-4 theme-border-darkaccent shadow">
					<div className="card-body">
						<p className="text-center display-6 theme-text-darkaccent">
							<i className="bi bi-toggle-off"></i>
						</p>
						<h3 className="card-title mb-4 fs-4 theme-text-dark">Zakończ pracę</h3>
						<button
							className="btn theme-btn-darkaccent"
							onClick={logOut}
						>Wyloguj
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}