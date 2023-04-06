import React, { BaseSyntheticEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import { LoginContext } from "../../contexts/login.context";

export const Menu = () => {
	const { id, loggedIn } = useContext(LoginContext);

	const navigate = useNavigate();

	const handleDashboardReq = (e: BaseSyntheticEvent) => {
		e.preventDefault();

		if (!loggedIn) {
			navigate('/user/login');
		} else {
			navigate(`/user/${id}`);
		}
	}

	return <>
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
							   href="#about">O Termino</a>
						</li>
						<li className="nav-item">
							<a className="nav-link rounded"
							   href="#contact">Kontakt</a>
						</li>
						<li className="nav-item">
							<a className="nav-link rounded"
							   href="/"
							   onClick={handleDashboardReq}>Twoje konto</a>
						</li>
					</ul>
					<Link to="/demo"
						  className="ms-auto btn theme-btn-light-darkaccent border-2 my-4 my-lg-0 fw-bold">Sprawdź</Link>

				</div>
			</div>
		</div>
	</>
};