'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import users from "../../data/users";

export default function admin() {
	const router = useRouter();
	const [password, setPassword] = useState("");
	console.log(users);
	const login = () => {
		password === users[0].password
			? router.push("/admin/dashboard")
			: alert("wrong password");
	};
	
	return (
		<div>
			<h1>admin page</h1>
			<p>password: </p>
			<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button onClick={() => login(password)}>login</button>
		</div>
	);
}
