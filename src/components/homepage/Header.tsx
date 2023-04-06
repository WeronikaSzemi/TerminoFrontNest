import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
	return <>
		<header>
			<div className="background d-flex align-items-stretch py-2">
				<div className="container d-flex my-5">
					<div className="row align-items-center w-100 g-0 rounded text-white bg-dark-transparent">
						<div className="col-12 col-md-6 text-center text-md-end pe-3">
							<img src="/images/logo.png"
								 alt="Logotyp Termino"
								 height="200"
								 className=""/>
						</div>
						<div className="col-12 col-md-6 mt-3 mt-md-0 text-md-start text-center">
							<h1 className="display-3">Termino</h1>
							<p className="lead">Przestrzeń na Twoją terminologię</p>
							<p>
								<Link to="/user/register"
									 className="btn btn-lg btn-outline-light rounded-3 border-2">
									Dołącz
								</Link></p>
						</div>
					</div>
				</div>
			</div>
		</header>
	</>
}