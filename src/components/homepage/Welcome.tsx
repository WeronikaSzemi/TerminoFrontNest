import React from "react";
import {Link} from "react-router-dom";
import '../style.css';

export const Welcome = () => {
	return <div className="p-5 theme-bg-light">
		<h2>Witaj w Termino!</h2>
		<p className="lead">Uczysz się języków obcych? Zbierasz terminologię jakiegoś przedmiotu? Studiujesz filologię
			lub tłumaczenia? <span className="theme-text-darkaccent"><strong>Termino jest dla Ciebie!</strong></span>
		</p>
		<p>Możesz tutaj gromadzić słownictwo fachowe i ogólne w postaci zaawansowanych słowników. Możesz zapisywać nie
			tylko wyrażenia i ich odpowiedniki w drugim języku, ale też ich źródła i definicje, konteksty użycia,
			przykładowe zdania i typowe kolokacje.</p>
		<p>Chcesz sprawdzić, jakie to wygodne?</p>
		<Link to="/demo"
			  className="btn theme-btn-darkaccent border-2">Zobacz demo</Link>
	</div>
}