import React from "react";
import {Link} from "react-router-dom";

export const About = () => {
	return <>
		<div className="theme-bg-lightaccent theme-text-light p-5">
			<div id="about">
				<h2 className="text-center mb-4">O Termino</h2>

				<div className="row align-items-center">
					<div className="col-12 col-md-6">
						<p className="lead">Termino to aplikacja do gromadzenia i przechowywania słownictwa w formie
							osobnych dwujęzycznych słowniczków, glosariuszy czy baz terminologicznych.</p>
						<p>Możesz tu utworzyć dowolną liczbę takich zbiorów i gromadzić w nich słownictwo: tematyczne,
							specjalistyczne czy ogólne.</p>
					</div>
					<div className="col-12 col-md-6">
						<p>Tworząc hasło, podajesz wyrażenie i jego odpowiednik w języku obcym. Do wykorzystania masz
							też przestrzeń na:</p>
						<ul className="list-unstyled theme-text-light">
							<li><i className="bi bi-check2-circle"></i> źródła</li>
							<li><i className="bi bi-check2-circle"></i> definicje</li>
							<li><i className="bi bi-check2-circle"></i> kolokacje</li>
							<li><i className="bi bi-check2-circle"></i> synonimy</li>
							<li><i className="bi bi-check2-circle"></i> przykładowe zdania</li>
						</ul>
					</div>
				</div>
				<h3 className="text-center mt-4">Do czego przyda się Termino?</h3>
				<div className="row">
					<div className="col-lg-4 col-sm-6 col-12 mt-3">
						<div className="service shadow-lg theme-bg-light text-center p-3 rounded w-100">
							<p className="text-center display-6 theme-text-mainbrand">
								<i className="bi bi-pencil-fill"></i>
							</p>
							<h3 className="fs-4 theme-text-darkaccent">Nauka języków</h3>
							<p className="theme-text-dark">Możesz gromadzić potrzebne słownictwo i dane na jego temat,
								grupując je w słowniczki tematyczne.</p>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12 mt-3">
						<div className="service shadow-lg theme-bg-light text-center p-3 rounded w-100">
							<p className="text-center display-6 theme-text-mainbrand">
								<i className="bi bi-briefcase-fill"></i>
							</p>
							<h3 className="fs-4 theme-text-darkaccent">Terminologia</h3>
							<p className="theme-text-dark">Słownictwo specjalistyczne wraz z ekwiwalentami możesz
								opatrywać potrzebnymi definicjami i źródłami.</p>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12 mt-3">
						<div className="service shadow-lg theme-bg-light text-center p-3 rounded w-100">
							<p className="text-center display-6 theme-text-mainbrand">
								<i className="bi bi-translate"></i>
							</p>
							<h3 className="fs-4 theme-text-darkaccent">Tłumaczenia</h3>
							<p className="theme-text-dark">Jeśli sporządzasz tłumaczenia, ale nie masz programu CAT, tu
								możesz przechowywać swoje słownictwo potrzebne w pracy.</p>
						</div>
					</div>
				</div>
				<div className="container text-center">
					<Link to="/termbases/sampletermbase"
						  className="btn btn-lg theme-btn-darkaccent border-2 mt-5 px-5">Zobacz, jak to działa</Link>
				</div>
			</div>
		</div>

	</>
}