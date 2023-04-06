import React, { useState } from "react";

export const ContactForm = () => {
	const [message, setMessage] = useState({
		subject: '',
		body: '',
	})

	const updateMessage = (key: string, value: any) => {
		setMessage(message => ({
			...message,
			[key]: value,
		}));
	}

	const emailStructure = `mailto:termino@example.com?subject=${message.subject}&body=${message.body}`;

	return (
		<div className="container p-5">
			<div id="contact">
				<h2 className="theme-text-dark text-center mb-4">Kontakt</h2>
				<p className="theme-text-darkaccent text-center lead">Masz pytania? Napisz do nas! Zazwyczaj odpowiadamy w ciągu dwóch dni roboczych.</p>
				<form>
					<div className="row align-items-center">
							<label htmlFor="subject"
								   className="form-label">Temat</label>
							<input type="text"
								   className="form-control"
								   id="subject"
								   maxLength={50}
								   minLength={5}
								   placeholder="Np. Problemy z logowaniem"
								   required
								   onChange={e => updateMessage('subject', e.target.value)}
							/>
							<label htmlFor="body"
								   className="form-label mt-3">Treść wiadomości</label>
							<textarea name="body"
									  id="body"
									  className="form-control"
									  required
									  onChange={e => updateMessage('body', e.target.value)}
							/>
						<a href={emailStructure} className="btn theme-btn-mainbrand mt-3">Wyślij</a>
					</div>
				</form>
			</div>
		</div>
	)
}