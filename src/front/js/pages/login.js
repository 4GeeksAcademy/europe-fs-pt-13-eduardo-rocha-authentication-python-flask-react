import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const history = useNavigate();

	const token = sessionStorage.getItem("token");

	const handleClick = () => {
		actions.login(email, password).then(() =>{
			history.push("/")
		})
	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			{(token && token!="" && token!=undefined) ? "User logged in with" + token :
				<div>
					<input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
					<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>/>
					<button onClick={handleClick}>Login</button>
				</div>
			}
		</div>
	);
};
