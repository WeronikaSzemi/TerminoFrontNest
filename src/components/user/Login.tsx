import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
import { newUser } from "../../types/new-user";
import { LoginContext } from "../../contexts/login.context";

export const Login = () => {
	const [user, setUser] = useState<newUser>({
		email: '',
		pwd: '',
	});
	const [message, setMessage] = useState({
		content: '',
		style: '',
	});

	const { setId } = useContext(LoginContext);

	const navigate = useNavigate();

	const updateForm = (key: string, value: any) => {
		setUser(user => ({
			...user,
			[key]: value,
		}));
	};

	const sendForm = async (e: FormEvent) => {
		e.preventDefault();

		const res = await fetch('http://localhost:3001/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const result = await res.json();

		if (!result.result) {
			setMessage({
				content: 'Logowanie nie powiodło się. Nieprawidłowe hasło lub nazwa użytkownika_czki.',
				style: 'container mt-3 border border-3 theme-border-darkaccent rounded py-1 px-4',
			});
		} else {
			setMessage({
				content: '',
				style: '',
			});
			setId(result.user.userId);
			navigate(`/user/${result.user.userId}`)
		}
	}

	return <div className="container p-3">
		<h2 className="my-5 theme-text-mainbrand">Logowanie</h2>
		<div className="card w-75 p-3 theme-border-mainbrand">
			<form onSubmit={sendForm}>
				<div className="mb-3">
					<label htmlFor="userName"
						   className="form-label fw-bold">Adres email</label>
					<input
						type="email"
						value={user.email}
						onChange={e => updateForm('email', e.target.value)}
						maxLength={30}
						className="form-control"
						id="email"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="pwd"
						   className="form-label fw-bold">Hasło</label>
					<input
						type="password"
						value={user.pwd}
						onChange={e => updateForm('pwd', e.target.value)}
						maxLength={50}
						className="form-control"
						id="pwd"
						required
					/>
				</div>
				<button type="submit"
						className="btn theme-btn-mainbrand border-2 w-100"
				>Zaloguj
				</button>
				<p className="mt-3 mb-2">Nie masz konta? <Link to={'/user/register'}
															   className="theme-text-mainbrand">Zarejestruj się</Link>.
				</p>
			</form>
			<div className={message.style}>{message.content}</div>
		</div>
	</div>
}