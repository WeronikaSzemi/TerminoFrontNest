import React, { BaseSyntheticEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import { UserContext } from "../../contexts/user.context";

export const UserMenu = () => {
	const {id} = useContext(UserContext);

	const navigate = useNavigate();

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
		<div className="navbar navbar-expand-md sticky-top navbar-dark theme-bg-lightaccent">
			<div className="container-fluid">
				<a href="/"
				   className="navbar-brand">
					<img
						src="/images/logo.png"
						alt="Logo Termino"
						height="48"
						className="d-inline-block"
					/>
				</a>
				<button className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navigation"
						aria-controls="navigation"
						aria-expanded="false"
						aria-label="Przełącz nawigację">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse mt-3 mt-lg-0 me-auto"
					 id="navigation">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link rounded"
							   href="/">Strona główna</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link rounded"
							   to={`/user/${id}`}>Panel użytkownika_czki</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rounded"
							   to={`/${id}/termbase`}>Twoje słowniki</Link>
						</li>
					</ul>
					<button
						className="ms-auto btn theme-btn-light-darkaccent border-2 my-4 my-lg-0 fw-bold"
						onClick={logOut}>
						Wyloguj
					</button>

				</div>
			</div>
		</div>
	)
}
