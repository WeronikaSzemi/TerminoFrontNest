import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { newUser } from "../../types/new-user";

export const Register = () => {
	const [user, setUser] = useState<newUser>({
		email: '',
		pwd: '',
	})
	const [loading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState({
		content: '',
		style: '',
	});
	const [emailVerifRes, setEmailVerifRes] = useState({
		result: false,
		content: '',
		backgroundColor: '',
	});
	const [pwdVerifRes, setPwdVerifRes] = useState({
		result: false,
		backgroundColor: '',
	});

	const navigate = useNavigate();

	useEffect(() => {
		verifyEmail();
	}, [user.email]);

	useEffect(() => {
		verifyPwd();
	}, [user.pwd]);

	const verifyEmail = async () => {
		const res = await fetch(`http://localhost:3001/user/${user.email}?by=email`);
		const result = await res.json();

		if (!result) {
			setEmailVerifRes({
				result: true,
				content: '',
				backgroundColor: '',
			});
		} else {
			setEmailVerifRes({
				result: false,
				content: `Istnieje już konto dla podanego adresu email. Zaloguj się lub podaj inny adres.`,
				backgroundColor: 'lightcoral',
			});
		}
	}

	const verifyPwd = () => {
		if (user.pwd.length < 5) {
			setPwdVerifRes({
				result: false,
				backgroundColor: 'lightcoral',
			});
		} else {
			setPwdVerifRes({
				result: true,
				backgroundColor: '',
			});
		}
	}

	const sendForm = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const newUser: newUser = {
			email: user.email,
			pwd: user.pwd,
		}

		try {
			const res = await fetch('http://localhost:3001/user/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			});
			const result = await res.json();

			if (result.statusCode === 500) {
				setMessage({
					content: 'Nie udało się zarejestrować. Sprawdź dane i spróbuj ponownie.',
					style: 'container mt-3 border border-3 theme-border-darkaccent rounded py-1 px-4',
				})
			} else {
				setMessage({
					content: '',
					style: '',
				});
				navigate('/user/login');
			}

		} finally {
			setLoading(false);
		}

	}

	const updateForm = (key: string, value: any) => {
		setUser(user => ({
			...user,
			[key]: value,
		}));
	};

	if (loading) {
		return <Spinner/>
	}

	return <div className="container p-3">
		<h2 className="my-5 theme-text-mainbrand">Rejestracja</h2>
		<div className="card w-75 p-3 theme-border-mainbrand">
			<form onSubmit={sendForm}>
				<div className="mb-3">
					<label htmlFor="email"
						   className="form-label fw-bold">Adres email</label>
					<input
						type="email"
						value={user.email}
						onChange={e => updateForm('email', e.target.value)}
						maxLength={50}
						className="form-control"
						id="email"
						style={{backgroundColor: emailVerifRes.backgroundColor}}
						aria-describedby="emailHelp"
						required
					/>
					<div id="emailHelp"
						 className="form-text">Pole obowiązkowe. Adres email może mieć do 50 znaków.
					</div>
					<div className="form-text"
						 style={{color: 'lightcoral'}}>
						{emailVerifRes.content}
					</div>
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
						style={{backgroundColor: pwdVerifRes.backgroundColor}}
						aria-describedby="pwdHelp"
						required
					/>
					<div id="pwdHelp"
						 className="form-text">Pole obowiązkowe. Hasło może składać się z od 5 do 15 znaków.
					</div>
				</div>
				<button type="submit"
						className="btn theme-btn-mainbrand border-2 w-100"
				>Utwórz konto
				</button>
				<p className="mt-3 mb-2">
					Masz już konto? <Link to={'/user/login'} className="theme-text-mainbrand"> Zaloguj się</Link>.
				</p>
			</form>
			<div className={message.style}>{message.content}</div>
		</div>
	</div>
}